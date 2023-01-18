import React from 'react'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center p-0 gap-16 h-88 text-1xl">
      <div className="flex flex-row gap-16 items-start font-bold uppercase">
        <Link className='hover:text-violet-300' href="/">home</Link>
        <Link className='hover:text-violet-300' href="/">courses</Link>
        <Link className='hover:text-violet-300' href="/">community</Link>
        <Link className='hover:text-violet-300' href="/">about</Link>
      </div>

      <RxDividerVertical className="text-3xl" />

      <div className="flex flex-row gap-24 font-bold text-2xl">
        <AiOutlineSearch className='hover:text-violet-300' />
        <AiOutlineUser className='hover:text-violet-300' />
      </div>
    </nav>
  )
}

export default Navbar