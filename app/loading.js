import React from "react";

export default function BankLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 z-50 text-white">
      {/* Bank Logo (replace with your logo img if needed) */}
      <div className="flex items-center space-x-2 animate-pulse">
        <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xl">
          CB
        </div>
        <span className="text-2xl font-bold">FUNWISE</span>
      </div>

      {/* Progress bar style loader */}
      <div className="w-64 h-2 bg-white/30 rounded-full mt-6 overflow-hidden">
        <div className="h-2 bg-yellow-400 animate-[progress_2s_linear_infinite]"></div>
      </div>

      <style>
        {`
          @keyframes progress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
}
