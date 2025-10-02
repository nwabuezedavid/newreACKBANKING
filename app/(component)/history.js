'use client';

import { useState } from 'react';

export default function TransactionHistoryPage() {
  // Sample transactions (in real app, fetch from DB/API)
  const [transactions] = useState([
    {
      id: 'TXN001',
      type: 'Local',
      recipient: 'John Doe',
      bank: 'First Bank Nigeria',
      account: '1234567890',
      amount: 50000,
      currency: 'NGN',
      status: 'Success',
      date: '2025-09-25',
    },
    {
      id: 'TXN002',
      type: 'International',
      recipient: 'Alice Smith',
      bank: 'HSBC UK',
      account: 'GB29 NWBK 6016 1331 9268 19',
      amount: 1200,
      currency: 'USD',
      status: 'Pending',
      date: '2025-09-26',
    },
    {
      id: 'TXN003',
      type: 'Local',
      recipient: 'Michael Johnson',
      bank: 'GTBank',
      account: '0987654321',
      amount: 20000,
      currency: 'NGN',
      status: 'Failed',
      date: '2025-09-27',
    },
  ]);

  // Status badge styles
  const statusStyles = {
    Success: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Failed: 'bg-red-100 text-red-700',
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          📊 Transaction History
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">Transaction ID</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">Type</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">Recipient</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">Bank</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">Account</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">Amount</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">Currency</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="border-t hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-700">{txn.id}</td>
                  <td className="p-3 text-sm font-medium text-blue-600">{txn.type}</td>
                  <td className="p-3 text-sm text-gray-700">{txn.recipient}</td>
                  <td className="p-3 text-sm text-gray-700">{txn.bank}</td>
                  <td className="p-3 text-sm text-gray-700">{txn.account}</td>
                  <td className="p-3 text-sm font-semibold text-gray-800">
                    {txn.amount.toLocaleString()}
                  </td>
                  <td className="p-3 text-sm">{txn.currency}</td>
                  <td className="p-3 text-sm">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[txn.status]}`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-500">{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
