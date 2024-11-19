"use client";
import React from "react";
import Image from "next/image";

const Payment = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 space-y-6">
        {/* bKash Banner */}
        <div className="bg-[#F1F1F1] p-4 rounded-md shadow-md w-full sm:w-1/2 md:w-1/3">
          <h2 className="text-center text-xl font-semibold">Pay with bKash</h2>
          <div className="my-4 flex justify-center">
            <Image
              src="https://community.appinventor.mit.edu/uploads/default/original/3X/7/e/7e5d178642a95e6ecc3dd1d2e12afd0b34bd3031.png"
              alt="bKash Payment"
              width={300}
              height={100}
              unoptimized
              loading="lazy"
              loader={()=>"https://community.appinventor.mit.edu/uploads/default/original/3X/7/e/7e5d178642a95e6ecc3dd1d2e12afd0b34bd3031.png"}
              className="rounded-md"
            />
          </div>
          <p className="text-center text-gray-600">
            To make a payment, send the amount to <strong>01642167361</strong>{" "}
            via bKash.
          </p>
        </div>

        {/* Payment instructions */}
        <div className="w-full sm:w-1/2 md:w-1/3 bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-4">Payment Instructions</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Open your bKash app or dial *247#.</li>
            <li>
              Select "Send Money" and enter the number{" "}
              <strong>01642167361</strong>.
            </li>
            <li>
              Enter the amount you want to pay and confirm the transaction.
            </li>
            <li>
              Make sure to mention the reason for the payment in the "Payment
              For" section (optional).
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Payment;
