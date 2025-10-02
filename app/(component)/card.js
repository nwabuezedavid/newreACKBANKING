"use client";

export default function CreditCard() {
  return (
    <div className="w-[100%] max-h-[220px] rounded-2xl shadow-lg bg-gradient-to-r from-black to-purple-400 p-6 text-white flex flex-col justify-between relative">
      {/* Card Logo */}
      <div className="absolute top-4 right-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
          alt="MasterCard"
          className="w-16"
        />
      </div>

      {/* Card Details */}
      <div className="space-y-3">
        <div>
          <p className="text-sm opacity-80">Name</p>
          <p className="text-lg font-semibold">Karthik P</p>
        </div>

        <div>
          <p className="text-sm opacity-80">Card Number</p>
          <p className="text-lg font-semibold tracking-widest">
            4642 3489 9867 7632
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-xs opacity-80">Valid</p>
          <p className="font-semibold">11/15</p>
        </div>
        <div>
          <p className="text-xs opacity-80">Expiry</p>
          <p className="font-semibold">03/25</p>
        </div>
        <div>
          <p className="text-xs opacity-80">CVV</p>
          <p className="font-semibold">•••</p>
        </div>
      </div>
    </div>
  );
}
