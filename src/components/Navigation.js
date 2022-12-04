import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav
    className='w-[40%] mt-16 flex justify-around align-middle border border-primary rounded-lg z-5'>

        <NavLink to="/"
        end
        className={
            ({isActive}) => {
                return `w-full text-base text-center font-nunito m-2.5 
                ${isActive ? 'bg-primary text-gray-300' : 'bg-gray-100 text-gray-300  hover:text-primary active:bg-primary active:text-gray-300'} bg-white text-gray-200 border-0 cursor-pointer rounded capitalize font-semibold`
            }
        }>Home
        </NavLink>
        

    </nav>
  )
}

export default Navigation