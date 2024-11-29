"use client";
import React from "react";
import Image from "next/image";

const Payment = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 space-y-6">
        {/* Nagad Banner */}
        <div className="bg-[#F1F1F1] p-4 rounded-md shadow-md w-full sm:w-1/2 md:w-1/3 max-lg:w-full">
          <h2 className="text-center text-xl font-semibold">Pay with Nagad</h2>
          <div className="my-4 flex justify-center">
            <Image
              src="https://images.prothomalo.com/prothomalo-english%2F2020-04%2Fcada797e-1d38-4a22-ae54-9a3317d35f39%2FNagad.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1"
              alt="Nagad Payment"
              width={300}
              height={100}
              unoptimized
              loading="lazy"
              loader={() =>
                "https://images.prothomalo.com/prothomalo-english%2F2020-04%2Fcada797e-1d38-4a22-ae54-9a3317d35f39%2FNagad.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1"
              }
              className="rounded-md max-lg:!w-full"
            />
          </div>
          <p className="text-center text-gray-600">
            To make a payment, send the amount to <strong>01921372427</strong>{" "}
            via Nagad.
          </p>
        </div>

        {/* Payment instructions */}
        <div className="w-full sm:w-1/2 md:w-1/3 bg-white p-6 rounded-md shadow-md max-lg:w-full">
          <h3 className="text-lg font-semibold mb-4">Payment Instructions</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Open your Nagad app or dial *167#.</li>
            <li>
              Select "Send Money" and enter the number{" "}
              <strong>01921372427</strong>.
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
