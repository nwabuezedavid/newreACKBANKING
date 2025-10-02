import React, { useState } from "react";

export default function TransferFund( {isOpen, setIsOpen}) {
  

  return (
    <div className="p-6">
      {/* Button to open modal */}
       {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          {/* Modal */}
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Transfer Funds
            </h2>

            <form className="space-y-4">
              {/* From Account */}
              <div>
                <label className="block text-sm text-gray-600">Account Name</label>
                <input
                  type="text" required
                  placeholder="Enter your account Name"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Account Number</label>
                <input
                  type="number" required
                  placeholder="Enter your account Number"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">User Email(optional)</label>
                <input
                  type="number"
                  placeholder="Enter your User Email(optional)"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* To Account */}
            

              {/* Amount */}
              <div>
                <label className="block text-sm text-gray-600">Amount</label>
                <input
                  type="number" required
                  placeholder="Enter amount"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div className=" flex  flex-col w-fit">
                <label className="block text-sm text-gray-600">Save Detail</label>
                <input
                  type="checkbox"    
                  
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
       )}
    </div>
  );
}
