"use client"
import React, { ReactComponentElement } from 'react'

const Nav = () => {
  return (
    <nav className='flex items-center justify-between border-b'>
        <h1>DishDash</h1>
        <div>
            <img 
                className='cursor-pointer' 
                src='/img/undraw_chef.svg' 
                width={100} 
            />
        </div>
    </nav>
  )
}

export default Nav;