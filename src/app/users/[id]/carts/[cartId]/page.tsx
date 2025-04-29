"use client";
import { CartType } from "@/interfaces";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { cartId } = useParams();
  const [cart, setCart] = useState<CartType>();
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/carts/${cartId}`);
        if (!res.ok) throw new Error("failed to fetch cart");
        const data = await res.json();

        const date = new Date(data.date);
        setCart(data);
        setYear(date.getFullYear());
        setMonth(date.getMonth() + 1);
        setDay(date.getDate());
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [cartId]);

  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-green-900">
          <span className="text-2xl font-semibold text-green-400 pr-6">
            CartID:
          </span>
          {cart?.id}
        </h1>
        <h1 className="text-4xl font-bold text-green-900">
          <span className="text-2xl font-semibold text-green-400 pr-6">
            UserID:
          </span>
          {cart?.userId}
        </h1>
        <h1 className="text-4xl font-bold text-green-900">
          <span className="text-2xl font-semibold text-green-400 pr-6">
            Date:
          </span>
          {day}-{month}-{year}
        </h1>
      </div>
    </div>
  );
};

export default Page;
