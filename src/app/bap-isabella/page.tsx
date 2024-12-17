"use client"
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [user, setUser]: any = useState({
    userName: "bap-isabella",
    name: "Isabella",
    totalCoin: "10",
  });
  return (
    <>
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <div className="flex items-center mb-6">
          <Avatar size={64} icon={<UserOutlined />} className="mr-4" />
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-500">@{user.userName}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded">
            <span className="font-medium">Total Coins:</span>
            <span className="text-blue-600 font-semibold">
              {user.totalCoin}
            </span>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded">
            <span className="font-medium">Total Value:</span>
            <span className="text-green-600 font-semibold">
              ${user.totalCoin * 1.04}
            </span>
          </div>
        </div>
        <Link href="/" className="mt-5 block mx-auto">
          <Button className=" !bg-blue-500 !text-white border-none">
            Back to home
          </Button>
        </Link>
      </Card>
    </>
  );
};

export default page;
