"use client";
import { UserType } from "@/interfaces";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserType>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/users/${id}`);
      if (!res.ok) throw new Error("failed to fetch user");
      const data = await res.json();
      setUser(data);
    };
    fetchData();
  }, []);

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
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2384.2421247648873!2d-0.1277582!3d51.5073509!3m2!1i1024!2i768!4f13.1"
        width="600"
        height="450"
        aria-hidden="false"
      ></iframe> */}
    </div>
  );
};

export default page;
