"use client";

import React, { useEffect, useState } from "react";
import { Card, Avatar, Button } from "antd";
import { useParams } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import { userData } from "@/data";
import Link from "next/link";

export default function UserProfile() {
  const [user, setUser]: any = useState({});
  const params:any = useParams();

  console.log("params id: ", params.id);

  useEffect(() => {
    const res: any = userData.map((user: any, idx: number) => {
      if (user?.userName === params?.id) {
        return {
          ...user,
        };
      }
    });
    setUser(res[0]);
  }, [params?.id]);

  return (
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
          <span className="text-blue-600 font-semibold">{user.totalCoin}</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded">
          <span className="font-medium">Total Value:</span>
          <span className="text-green-600 font-semibold">
            ${user.totalCoin * 1.01}
          </span>
        </div>
      </div>
      <Link href="/" className="mt-5 block mx-auto">
        <Button className=" !bg-blue-500 !text-white border-none">Back to home</Button>
      </Link>
    </Card>
  );
}
