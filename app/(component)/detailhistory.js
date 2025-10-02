'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Mock transaction data (replace with fetch from DB/API)
const transactions = [
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
    reason: 'Tuition Payment',
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
    reason: 'Business Invoice Settlement',
  },
];

export default function TransactionDetailPage() {
  const params = useParams(); // Grab transaction id from URL
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const txn = transactions.find((t) => t.id === params.id);
    setTransaction(txn);
  }, [params.id]);

  if (!transaction) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        ⏳ Loading Transaction Details...
      </div>
    );
  }

  const statusColors = {
    Success: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Failed: 'bg-red-100 text-red-700',
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Transaction Details
        </h1>

        <div className="space-y-4">
          <DetailRow label="Transaction ID" value={transaction.id} />
          <DetailRow label="Type" value={transaction.type} />
          <DetailRow label="Recipient" value={transaction.recipient} />
          <DetailRow label="Bank" value={transaction.bank} />
          <DetailRow label="Account" value={transaction.account} />
          <DetailRow
            label="Amount"
            value={`${transaction.amount.toLocaleString()} ${transaction.currency}`}
          />
          <DetailRow
            label="Status"
            value={
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[transaction.status]}`}
              >
                {transaction.status}
              </span>
            }
          />
          <DetailRow label="Date" value={transaction.date} />
          <DetailRow label="Reason" value={transaction.reason} />
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-sm font-medium text-gray-600">{label}</span>
      <span className="text-sm text-gray-800">{value}</span>
    </div>
  );
}
