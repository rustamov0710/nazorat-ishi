"use client";
import { CartType } from "@/interfaces";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const [carts, setCarts] = useState<CartType[]>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/carts`);
      if (!res.ok) throw new Error("failed to fetch carts");
      const data = await res.json();
      setCarts(data);
    };
    fetchData();
  }, []);
  const newCarts = carts?.filter((el: any) => el.userId === Number(id));
  return (
    <div>
      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newCarts?.map((el: CartType) => (
          <Link key={el.id} href={`/users/${id}/carts/${el.id}`}>
            <li className="flex hover:scale-110 hover:shadow-lg duration-700 ease-in-out flex-col w-[200px] border-2 border-gray-400 p-5 rounded-lg ">
              <span className="text-xl font-medium">
                Id: <strong className="font-bold text-2xl">{el.id}</strong>
              </span>
              <span className="text-xl font-medium">
                UserId:{" "}
                <strong className="font-bold text-2xl">{el.userId}</strong>
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default page;
