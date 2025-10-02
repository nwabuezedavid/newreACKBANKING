"use client";

export default function TransactionsTable() {
  const transactions = [
    { id: 1, uuid:'234jkhdkjdsh', type: "Deposit", amount: 500, date: "2025-10-01", status: "Completed" },
    { id: 2, uuid:'234334jkhdkjdsh', type: "Withdrawal", amount: 200, date: "2025-09-29", status: "Pending" },
    { id: 3,  uuid:'234werjkhdkjdsh',type: "Fund Transfer", amount: 1000, date: "2025-09-25", status: "Completed" },
  ];

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                uuid
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border text-xs   whitespace-nowrap font-semibold text-gray-700">
                  {tx.uuid}
                </td>
                <td className="px-6 py-4 border  w-fit text-xs bg whitespace-nowrap font-semibold text-gray-700">
                  <h5 className="felx bg-purple-300 w-fit h -fit rounded text-white p-1">

                  {tx.type}
                  </h5>
                </td>
                <td
                  className={`px-6 py-4 border text-xs whitespace-nowrap font-semibold ${
                    tx.type === "Withdrawal"
                      ? "text-red-500"
                      : tx.type === "Deposit"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                >
                  ${tx.amount}
                </td>
                <td className="px-6 py-4 text-xs whitespace-nowrap text-gray-600">
                  {tx.date}
                </td>
                <td>
                  <span
                    className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                      tx.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
