'use client';

import Link from 'next/link';
import { useState } from 'react';

/* ---------- Helpers ---------- */

// compute Luhn check digit for array of digits (as numbers)
function computeLuhnCheckDigit(digits) {
  // digits: array of ints for all digits except last check digit
  let sum = 0;
  // process digits right-to-left, doubling every second digit from the right
  for (let i = digits.length - 1, pos = 0; i >= 0; i--, pos++) {
    let d = digits[i];
    if (pos % 2 === 0) {
      // double
      d = d * 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  const mod = sum % 10;
  return mod === 0 ? 0 : 10 - mod;
}

// generate a valid card number with given prefix (string) and length (usually 16)
function generateCardNumber(prefix = '4', length = 16) {
  const number = prefix.split('').map((d) => parseInt(d, 10));
  // fill with random digits until length-1 (leave last for check digit)
  while (number.length < length - 1) {
    number.push(Math.floor(Math.random() * 10));
  }
  // compute check digit
  const checkDigit = computeLuhnCheckDigit(number);
  number.push(checkDigit);
  return number.join('');
}

function formatCardNumber(num) {
  // format like "4642 3489 9867 7632"
  return num.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}

function randomExpiry() {
  const now = new Date();
  const minYear = now.getFullYear() % 100 + 2; // e.g., if 2025 => 25, start from +2 years
  const maxYear = minYear + 4; // valid for next 5 years
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear).padStart(2, '0');
  return { month, year };
}

function randomCVV() {
  return String(Math.floor(100 + Math.random() * 900));
}

/* ---------- Component ---------- */

export default function VirtualsCardDashboard() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Karthik P',
      type: 'Virtual Debit',
      currency: 'USD',
      limit: 1000,
      status: 'Active',
      number: '4642348998677632',
      expiry: '03/25',
      cvv: '123',
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    account: '',
    email: '',
    phone: '',
    type: 'Virtual Debit',
    currency: 'USD',
    limit: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // pick a BIN/prefix depending on card type (for demo only)
    // Visa-like prefix '4' ; Mastercard-like prefix '5'
    const prefix = form.type.toLowerCase().includes('credit') ? '5' : '4';

    const rawNumber = generateCardNumber(prefix, 16);
    const formatted = formatCardNumber(rawNumber);
    const exp = randomExpiry();
    const cvv = randomCVV();

    const newCard = {
      id: Date.now(),
      ...form,
      status: 'Pending',
      number: rawNumber,
      formattedNumber: formatted,
      expiry: `${exp.month}/${exp.year}`,
      cvv,
    };

    setCards([newCard, ...cards]);
    setShowForm(false);
    setForm({
      name: '',
      account: '',
      email: '',
      phone: '',
      type: 'Virtual Debit',
      currency: 'USD',
      limit: '',
    });

    alert('✅ Virtual card request submitted — card (demo) generated.');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Virtual Cards</h1>
         
         <span className='flex w-fit gap-2'>
           <button
            onClick={() => setShowForm(!showForm)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
            >
             {showForm ? ('Close Form' ): (<><i className="bi bi-plus" /> Create Card</>)}
          </button>
          <Link
            href={'/card/link/'}
            className="bg-green-600 text-white  rounded-lg px-4 py-2  "
          >
             Link Card 
          </Link>
            </span>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <div key={card.id} className="relative">
              {/* Card visual */}
              <div
                className="relative w-full h-48 rounded-2xl text-white p-6 shadow-lg flex flex-col justify-between overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1e1e2f, #9b5de5)', // purple gradient
                }}
              >
                {/* Top row: name + logo */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm opacity-80">Name</p>
                    <p className="text-xl font-semibold">{card.name || '—'}</p>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                    alt="mastercard"
                    className="w-12 opacity-95"
                  />
                </div>

                {/* Card number */}
                <div>
                  <p className="text-sm opacity-80">Card Number</p>
                  <p className="tracking-widest text-lg font-bold">
                    {card.formattedNumber || formatCardNumber(card.number || '****************')}
                  </p>
                </div>

                {/* Bottom row: valid / expiry / cvv */}
                <div className="flex justify-between items-end text-sm">
                  <div>
                    <p className="opacity-70">Valid</p>
                    {/* 'valid' is usually issue date; we show created year short */}
                    <p className="font-semibold">{card.valid || '11/15'}</p>
                  </div>
                  <div>
                    <p className="opacity-70">Expiry</p>
                    <p className="font-semibold">{card.expiry || '03/25'}</p>
                  </div>
                  <div>
                    <p className="opacity-70">CVV</p>
                    <p className="font-semibold">•••</p>
                  </div>
                </div>
              </div>

              {/* small meta below card */}
              <div className="mt-3 text-sm">
                <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                  card.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {card.status}
                </span>
                <span className="ml-3 text-gray-600">{card.currency} • Limit: {card.limit || '—'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        {showForm && (
          <div className="mt-2 bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">Request New Virtual Card</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>

              {/* Account */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account / Wallet ID</label>
                <input type="text" name="account" value={form.account} onChange={handleChange} required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              {/* Type / Currency / Limit */}
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Spending Limit</label>
                  <input type="number" name="limit" value={form.limit} onChange={handleChange} required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Submit Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
