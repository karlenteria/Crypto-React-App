import React from 'react'
import { Outlet } from 'react-router'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { CryptoProvider } from '../context/CryptoContext'
import { Fragment } from 'react';
import ScrollButton from '../components/ScrollButton';
import { Content } from '../components/Styles';


const Home = () => {
  return (
    <Fragment>
   
  
    <CryptoProvider>

    <main className='w-full h-full flex flex-col first-letter: content-center items-center relative text-white font-nunito'>
    
    <div className='w-screen h-screen bg-#eee fixed -z-10'/>

    <Logo />
    <Navigation/>
    
    <Outlet/>
    </main>

    </CryptoProvider>
     <Content />
    <ScrollButton />
    </Fragment>
  )
}

export default Home