import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <nav className='bg-gray-900 p-10 w-1/6'>
      <Link href={'/users'} className='text-white text-3xl duration-700 ease-in-out font-bold text-center hover:bg-gray-700 px-10 py-1 rounded-lg'>Users</Link>
    </nav>
  )
}

export default Sidebar