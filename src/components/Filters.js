import React, { useRef } from 'react'
import { CryptoContext } from '../context/CryptoContext'
import Search from './Search'
import { useContext } from 'react';
import clear from "../assets/clear.svg"

const Filters = () => {

  let {setCurrency, clearSearch} = useContext(CryptoContext)
  const currencyRef = useRef(null)
  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val)
    currencyRef.current.value = "";
  }
  return (
    <div className='w-full h-12 border-2 border-primary rounded-lg flex items-center justify-between relative text-gray-300 mt-12'>
        <Search/>
        <div className=' flex mr-7'>
          <form className='relative flex items-center font-nunito mr-2'
          onSubmit={handleCurrencySubmit}>
          <label htmlFor="currency" className='relative flex justify-center items-center mr-2 font-bold'>Fiat:</label>
            <input className=' w-16 rounded placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-primary leading-4' type="text" name="currency"
            ref={currencyRef}  
            />
            <button type="submit"></button>            
          </form>
          <button onClick={clearSearch}
          className="w-[2rem] ml-4 hover:scale-110 transition-all transition-ease relative">
          <img className='rotate-180' src={clear}  alt="clear" /></button>
        </div>
    </div>
  )
}

export default Filters   