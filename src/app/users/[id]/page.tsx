"use client";
import { UserType } from "@/interfaces";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/users/${id}`);
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
    );
  }

  return (
    <div className="flex">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-blue-900">
          <span className="text-2xl font-semibold text-blue-400 pr-6">
            Full Name:
          </span>
          {user?.name.firstname} {user?.name.lastname}
        </h1>
        <h1 className="text-4xl font-bold text-blue-900">
          <span className="text-2xl font-semibold text-blue-400 pr-6">
            Email:
          </span>
          {user?.email}
        </h1>
        <h1 className="text-4xl font-bold text-blue-900">
          <span className="text-2xl font-semibold text-blue-400 pr-6">
            Password:
          </span>
          {user?.password}
        </h1>
        <h1 className="text-4xl font-bold text-blue-900">
          <span className="text-2xl font-semibold text-blue-400 pr-6">
            City:
          </span>
          {user?.address.city}
        </h1>
        <h1 className="text-4xl font-bold text-blue-900">
          <span className="text-2xl font-semibold text-blue-400 pr-6">
            Phone number:
          </span>
          {user?.phone}
        </h1>
        <Link
          href={`/users/${id}/carts`}
          className="text-3xl duration-500 ease-in-out font-semibold text-blue-500 pt-6 hover:text-blue-700"
        >
          Carts
        </Link>
      </div>
    </div>
  );
};

export default page;
