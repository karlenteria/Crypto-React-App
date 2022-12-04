import React from 'react'
import { Link } from 'react-router-dom'
import mainLogo from "../assets/logo.png"
const Logo = () => {
  return (
    <>
    <Link to="/" 
    className='absolute top-[1.5rem] left-[1.5rem] [text-decoration:none] text-lg text-primary flex items-center'> 
    <img className='w-[12.2rem] mr-6 h-[11.2rem]' src={ mainLogo } alt="Crypto Logo"/>
    </Link>
    </>
  )
}
export default Logo