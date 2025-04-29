'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const {id} = useParams();
  return (
    <div>
        <Link href={`/users/${id}/carts`} className='text-3xl font-semibold'>Carts</Link>
        {children}
    </div>
  )
}

export default layout