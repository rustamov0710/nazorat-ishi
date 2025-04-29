"use client";
import { CartType } from "@/interfaces";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { cartId } = useParams();
  const [cart, setCart] = useState<CartType>();
  const [year, setYear]= useState<number>()
  const [month, setMonth]= useState<number>()
  const [date, setDate]= useState<number>()
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/carts/${cartId}`);
      if (!res.ok) throw new Error("failed to fetch cart");
      const data = await res.json();

      const date = new Date(data.date);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      setCart(data);
      setYear(year);
      setMonth(month);
      setDate(day);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-green-900">
          <span className="text-2xl font-semibold text-green-400 pr-6">
            CartID:
          </span>
          {cart?.id}{" "}
        </h1>
        <h1 className="text-4xl font-bold text-green-900">
          <span className="text-2xl font-semibold text-green-400 pr-6">
            UserID:
          </span>
          {cart?.userId}{" "}
        </h1>
        <h1 className="text-4xl font-bold text-green-900">
          <span className="text-2xl font-semibold text-green-400 pr-6">
            Date:
          </span>
          {date}-{month}-{year}
        </h1>
      </div>
    </div>
  );
};

export default page;
