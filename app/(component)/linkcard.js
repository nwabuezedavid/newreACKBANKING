'use client';

import { useState } from 'react';

/* ---------- Helpers: formatting & Luhn ---------- */

function formatCardNumber(num) {
  return num.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}

// Luhn validation
function validateLuhn(cardNumber) {
  const digits = cardNumber.replace(/\D/g, '').split('').map((d) => parseInt(d, 10));
  if (digits.length < 12) return false;
  let sum = 0;
  let double = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits[i];
    if (double) {
      d = d * 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    double = !double;
  }
  return sum % 10 === 0;
}

function maskCardNumber(num) {
  const digits = num.replace(/\D/g, '');
  if (digits.length <= 4) return digits;
  const last4 = digits.slice(-4);
  return '•••• •••• •••• ' + last4;
}

/* ---------- Component ---------- */

export default function VirtualCardDashboard() {
  const [cards, setCards] = useState([
    // sample existing card (already in wallet)
    {
      id: 1,
      name: 'Karthik P',
      type: 'Virtual Debit',
      currency: 'USD',
      limit: 1000,
      status: 'Active',
      number: '4642348998677632',
      formattedNumber: formatCardNumber('4642348998677632'),
      expiry: '03/25',
      cvv: '123',
      addedToWallet: true,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const emptyForm = {
    name: '',
    account: '',
    email: '',
    phone: '',
    type: 'Virtual Debit',
    currency: 'USD',
    limit: '',
    // card details user will input
    cardNumber: '',
    expiry: '', // mm/yy
    cvv: '',
  };
  const [form, setForm] = useState({ ...emptyForm });
  const [notice, setNotice] = useState(null);
  const [luhnValid, setLuhnValid] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // format card number as user types
    if (name === 'cardNumber') {
      const raw = value.replace(/\D/g, '').slice(0, 19); // allow up to 19 digits (some cards)
      setForm((s) => ({ ...s, cardNumber: formatCardNumber(raw) }));
      const rawDigits = raw;
      if (rawDigits.length >= 12) {
        setLuhnValid(validateLuhn(rawDigits));
      } else {
        setLuhnValid(null);
      }
      return;
    }

    // expiry formatting: allow mm/yy or mm/yy typing
    if (name === 'expiry') {
      // remove non-digits and auto-insert slash
      const digits = value.replace(/\D/g, '').slice(0, 4);
      let formatted = digits;
      if (digits.length >= 3) formatted = digits.slice(0, 2) + '/' + digits.slice(2);
      if (digits.length <= 2) formatted = digits;
      setForm((s) => ({ ...s, expiry: formatted }));
      return;
    }

    // cvv limit digits
    if (name === 'cvv') {
      const digits = value.replace(/\D/g, '').slice(0, 4);
      setForm((s) => ({ ...s, cvv: digits }));
      return;
    }

    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic checks
    const rawCardDigits = form.cardNumber.replace(/\D/g, '');
    if (!rawCardDigits || rawCardDigits.length < 12) {
      setNotice('Please enter a valid card number.');
      setTimeout(() => setNotice(null), 3000);
      return;
    }
    if (!validateLuhn(rawCardDigits)) {
      setNotice('Card number failed validation (Luhn). Please re-check.');
      setTimeout(() => setNotice(null), 3500);
      return;
    }
    if (!form.expiry || !/^\d{2}\/\d{2}$/.test(form.expiry)) {
      setNotice('Expiry must be in MM/YY format.');
      setTimeout(() => setNotice(null), 3000);
      return;
    }
    if (!form.cvv || form.cvv.length < 3) {
      setNotice('Enter a valid CVV (3 or 4 digits).');
      setTimeout(() => setNotice(null), 3000);
      return;
    }

    // create card object from user input (store actual number here for demo; in production you would encrypt)
    const newCard = {
      id: Date.now(),
      name: form.name || '—',
      type: form.type,
      currency: form.currency,
      limit: form.limit || '—',
      status: 'Active', // since user provided details for their card
      number: rawCardDigits,
      formattedNumber: formatCardNumber(rawCardDigits),
      expiry: form.expiry,
      cvv: form.cvv,
      addedToWallet: true,
    };

    // add to list and reset
    setCards((c) => [newCard, ...c]);
    setForm({ ...emptyForm });
    setShowForm(true);
    setLuhnValid(null);
    setNotice('Card added to your wallet.');
    setTimeout(() => setNotice(null), 3000);
  };

  const openAddForm = () => {
    setForm({ ...emptyForm });
    setShowForm(true);
    setLuhnValid(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Virtual Cards</h1>
          <button
            onClick={openAddForm}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
           <i className='bi bi-link'></i> LInk Card
          </button>
        </div>

        {notice && <div className="mb-4 px-4 py-2 bg-indigo-50 text-indigo-700 rounded">{notice}</div>}

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <div key={card.id} className="relative">
              <div
                className="relative w-full h-48 rounded-2xl text-white p-6 shadow-lg flex flex-col justify-between overflow-hidden"
                style={{
                  background:
                    card.type?.toLowerCase().includes('credit')
                      ? 'linear-gradient(135deg,#0f172a,#7c3aed)'
                      : 'linear-gradient(135deg,#1f2937,#6d28d9)',
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm opacity-80">Name</p>
                    <p className="text-xl font-semibold">{card.name}</p>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                    alt="mastercard"
                    className="w-12 opacity-95"
                  />
                </div>

                <div>
                  <p className="text-sm opacity-80">Card Number</p>
                  <p className="tracking-widest text-lg font-bold">{maskCardNumber(card.formattedNumber || card.number)}</p>
                </div>

                <div className="flex justify-between items-end text-sm">
                  <div>
                    <p className="opacity-70">Valid</p>
                    <p className="font-semibold">—</p>
                  </div>
                  <div>
                    <p className="opacity-70">Expiry</p>
                    <p className="font-semibold">{card.expiry}</p>
                  </div>
                  <div>
                    <p className="opacity-70">CVV</p>
                    <p className="font-semibold">•••</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-sm">
                <span className={`inline-block px-3 py-1 text-sm rounded-full ${card.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {card.status}
                </span>
                <span className="ml-3 text-gray-600">
                  {card.currency} • Limit: {card.limit ?? '—'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Card Form */}
        {showForm && (
          <div className="mt-2 bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-3 text-gray-800 text-center">Add Card to Wallet</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account / Wallet ID</label>
                  <input type="text" name="account" value={form.account} onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                {luhnValid === false && <p className="mt-1 text-sm text-red-600">This card number looks invalid.</p>}
                {luhnValid === true && <p className="mt-1 text-sm text-green-700">Card number looks valid.</p>}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry (MM/YY)</label>
                  <input type="text" name="expiry" value={form.expiry} onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input type="text" name="cvv" value={form.cvv} onChange={handleChange}
                    placeholder="123" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Spending Limit</label>
                  <input type="number" name="limit" value={form.limit} onChange={handleChange}
                    placeholder="e.g. 1000" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Type</label>
                  <select name="type" value={form.type} onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="Virtual Debit">Virtual Debit</option>
                    <option value="Virtual Credit">Virtual Credit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                  <select name="currency" value={form.currency} onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="NGN">NGN</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                    Add Card
                  </button>
                </div>
              </div>

              <div className="text-center mt-2">
                <button type="button" onClick={() => { setShowForm(false); setForm({ ...emptyForm }); setLuhnValid(null); }}
                  className="text-sm text-gray-600 hover:underline">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
