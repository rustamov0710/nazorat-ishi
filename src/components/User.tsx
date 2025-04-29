import { UserType } from '@/interfaces'
import Link from 'next/link'
import React from 'react'

const User = ({user}:{user:UserType}) => {
  return (
    <Link href={`/users/${user.id}`}>
    <li className='w-[270] h-[180] border-2 bg-white duration-500 ease-in-out border-gray-400 rounded-lg p-10 hover:shadow-lg hover:scale-110'>
      <div className="flex flex-col">
      <span>Id: {user.id}</span>
      <span>Username: <strong>{user.username}</strong></span>
      <span className='truncate'>Email: <strong>{user.email}</strong></span>
      <span>Password: <strong>{user.password}</strong></span>
      </div>
    </li>
    </Link>
  )
}

export default User