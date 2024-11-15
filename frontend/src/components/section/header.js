import React from 'react'
export default function Header() {
  return (
    <div className='bg-yellow-500 p-4 text-white'>
      <nav className='justify-center flex items-center'>
        <ul className='flex justify-between space-x-4'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Events</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}
