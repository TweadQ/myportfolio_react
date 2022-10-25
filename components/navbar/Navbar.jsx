import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl font-bold">Quentin.L</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li className='uppercase font-bold'><Link href='/'>à propos de moi</Link></li>
      <li className='uppercase font-bold'><Link href='show'>mes réalisations</Link></li>
      <li className='uppercase font-bold'><a>contact</a></li>
    </ul>
  </div>
</div>
  )
}
