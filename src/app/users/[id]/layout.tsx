import Link from 'next/link';
import React from 'react'

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Link href={'/users'} className='text-3xl font-semibold'>Users</Link>
        {children}
    </div>
  )
}

export default Layout