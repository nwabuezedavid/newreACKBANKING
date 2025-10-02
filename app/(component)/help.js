"use client";

import { useState } from "react";

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState("faq");
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "How do I make a transfer?",
      a: "You can make both local and international transfers under the Transfers menu.",
    },
    {
      q: "How do I link my card?",
      a: "Go to the Cards section, click 'Link Card', and enter your card details.",
    },
    {
      q: "Why is my transfer pending?",
      a: "Transfers may be pending due to bank processing time or verification requirements.",
    },
    {
      q: "How can I reset my password?",
      a: "Use the 'Forgot Password' option on the login page to reset your password securely.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Help & Support
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-6 border-b pb-3 mb-6">
          {["faq", "guides", "contact"].map((tab) => (
            <button
              key={tab}
              className={`pb-2 px-4 font-semibold capitalize ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">{item.q}</h3>
                  <span className="text-xl">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </div>
                {openFAQ === index && (
                  <p className="mt-2 text-gray-600">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Guides Section */}
        {activeTab === "guides" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-700">User Guides</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>🔹 How to register and set up your account</li>
              <li>🔹 How to make local transfers</li>
              <li>🔹 How to make international transfers</li>
              <li>🔹 Linking and managing your cards</li>
              <li>🔹 Understanding your transaction history</li>
            </ul>
          </div>
        )}

        {/* Contact Support */}
        {activeTab === "contact" && (
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Contact Support
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Message</label>
                <textarea
                  className="w-full border rounded-lg px-4 py-2"
                  rows="4"
                  placeholder="Describe your issue"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
