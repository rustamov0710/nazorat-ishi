import User from '@/components/User'
import { UserType } from '@/interfaces'
import React from 'react'

const page = async() => {
    const res = await fetch('https://fakestoreapi.com/users')
    if(!res.ok)throw new Error('failed to fetch users')
      const users: UserType[] = await res.json()
  return (
    <div>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          users.map((el:UserType)=>(
            <User user={el} key={el.id}/>
          ))
        }
      </ul>
    </div>
  )
}

export default page