'use client';

import { useState, useEffect } from 'react';

export default function InternationalTransferPage() {
  const [form, setForm] = useState({
    recipientName: '',
    recipientBank: '',
    recipientAccount: '',
    swiftCode: '',
    amount: '',
    currency: 'USD',
    reason: '',
  });

  const [convertedAmount, setConvertedAmount] = useState(null);
  const [rates, setRates] = useState({});
  const API_KEY = "777a211c23e47e26f7f14e7a"; // your API key

  // Fetch exchange rates when component loads
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/EUR`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.conversion_rates) {
          setRates(data.conversion_rates);
        }
      })
      .catch((err) => console.error("Error fetching rates:", err));
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Auto convert amount
    if (e.target.name === "amount" || e.target.name === "currency") {
      const rate = rates[e.target.name === "currency" ? e.target.value : form.currency];
      if (rate && e.target.value) {
        const baseAmount = e.target.name === "amount" ? e.target.value : form.amount;
        setConvertedAmount((baseAmount / rate).toFixed(2));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Transfer of ${form.amount} ${form.currency} submitted`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          🌍 International Transfer
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Recipient Name */}
          <input
            type="text"
            name="recipientName"
            value={form.recipientName}
            onChange={handleChange}
            placeholder="Recipient Name"
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* Bank */}
          <input
            type="text"
            name="recipientBank"
            value={form.recipientBank}
            onChange={handleChange}
            placeholder="Recipient Bank"
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* Account Number */}
          <input
            type="text"
            name="recipientAccount"
            value={form.recipientAccount}
            onChange={handleChange}
            placeholder="Account Number"
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* SWIFT Code */}
          <input
            type="text"
            name="swiftCode"
            value={form.swiftCode}
            onChange={handleChange}
            placeholder="SWIFT Code"
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* Amount + Currency */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Amount"
              required
              className="w-full p-3 border rounded-lg"
            />

            <select
              name="currency"
              value={form.currency}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              {Object.keys(rates).map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          {/* Converted Value */}
          {convertedAmount && (
            <p className="text-sm text-gray-600">
              ≈ {convertedAmount} USD
            </p>
          )}

          {/* Reason */}
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            placeholder="Reason for Transfer"
            rows={3}
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit Transfer
          </button>
        </form>
      </div>
    </div>
  );
}
