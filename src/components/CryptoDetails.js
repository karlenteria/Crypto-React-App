import React, { useContext } from 'react'
import ReactDOM from "react-dom"
import { useParams } from 'react-router'
import { CryptoContext } from '../context/CryptoContext';
import {useLayoutEffect} from "react"
import { useNavigate } from "react-router-dom";
import Chart from './Chart';

const CryptoDetails = () => {
    let {coinId} =  useParams();
    let navigate = useNavigate();
    let {getCoinData, coinData:data, currency} = useContext(CryptoContext)
    useLayoutEffect(() => {
        
        getCoinData(coinId) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [coinId])
    const close = () => {
    navigate("..")
    }

    return ReactDOM.createPortal (
    <div className='fixed top-0 w-full h-full bg-primary bg-opacity-40 backdrop-blur-sm flex items-center justify-center font-nunito z-10' onClick={close}>
    <div className='w-[75%] h-[85%] bg-white bg-opacity-50 rounded-lg text-#1B1D21 relative' onClick={(e) => e.stopPropagation()}>
    {
        data ? 
        <div className='flex items-center justify-between h-full w-full p-4'>
            <div className='flex flex-col w-[55%] h-full pl-3 '>
            <Chart id={data.id}/>
            </div>
            <div className='flex flex-col w-[45%] h-full pr-2'>
            <div className='flex w-full items-center'>
            <img className='w-[3rem] h-[3rem] mx-1.5' src={data.image.large} alt={data.id} />
            <h1 className='text-xl capitalize font-medium'>{data.name}</h1>
            <span className='text-sm py-0.5 px-2.5 ml-2 bg-primary text-primary bg-opacity-25 rounded upp'>{data.symbol}</span>
            </div>

            <div className='flex w-full mt-6'>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-between'>
                    <span className='text-sm capitalize text-gray-200'>Price</span>
                    <div className={`text-sm px-1 ml-2 font-black flex items-center rounded uppercase bg-opacity-30 ${data.market_data.price_change_percentage_24h > 0 ? 'bg-green text-green ' : 'bg-red text-red font-extrabold'}  
                    `}>
                    <span>{Number(data.market_data.price_change_percentage_24h).toFixed(2)}%</span>
                    </div>
                    </div>
                    
                </div>
            </div>
            <h2>{new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: currency,
                            maximumSignificantDigits: 5,
                        }).format(data.market_data.current_price[currency])}</h2>

            <div className='flex w-full my-5 justify-between'>
                <div className='flex flex-col'>
                <span className='text-sm capitalize text-gray-300'>Market Cap</span>
                <h2>
                   {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: currency,
                            minimumFractionDigits: 0,
                        }).format(data.market_data.market_cap[currency])}
                </h2>
            </div>

            
            </div>

            <div className='flex flex-col w-full my-5 justify-between'>
                
                <span className='text-sm capitalize text-gray-300'>Total Volume</span>
                <h2>
                   {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: currency,
                            minimumFractionDigits: 0,
                        }).format(data.market_data.total_volume[currency])}
                </h2>
            

            </div>
            <div className='flex w-full justify-between my-5'>
                <div className='flex flex-col'>
                <span className='text-sm capitalize text-gray-300'>Low 24h</span>
                <h2>
                   {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: currency,
                            minimumFractionDigits: 1,
                        }).format(data.market_data.low_24h[currency])}
                </h2>
                </div>
                <div className='flex flex-col'>
                <span className='text-sm capitalize text-gray-300'>High 24h</span>
                <h2>
                   {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: currency,
                            minimumFractionDigits: 1,
                        }).format(data.market_data.high_24h[currency])}
                </h2>
            </div>

            
            </div>
             <div className='flex w-full justify-between mb-12'>
                <div className='flex flex-col'>
                <span className='text-sm capitalize text-gray-300'>Max Supply</span>
                <h2>
                   {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: currency,
                            minimumFractionDigits: 1,
                        }).format(data.market_data.max_supply)}
                </h2>
                </div>
                <div className='flex flex-col'>
                <span className='text-sm capitalize text-gray-300'>Circulating Supply</span>
                <h2>
                   {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: currency,
                            minimumFractionDigits: 1,
                        }).format(data.market_data.circulating_supply)}
                </h2>
            </div>

            
            </div>
            
            <div className='flex w-full mt-12 justify-between'>
            <div className='flex flex-col '>
                <a className='text-sm bg-gray-100 text-gray-300 px-1.5 py-0.5 my-0.5 rounded hover:scale-110 hover:font-black transition-all transition-ease' target={"_blank"} rel="noreferrer" href={data.links.homepage[0]}>{data.links.homepage[0].substring(0,30)}</a>
                <a className='text-sm bg-gray-100 text-gray-300 px-1.5 py-0.5 my-0.5 rounded hover:scale-110 hover:font-black transition-all transition-ease' target={"_blank"} rel="noreferrer" href={data.links.blockchain_site[0]}>{data.links.blockchain_site[0].substring(0,30)}</a>
                <a className='text-sm bg-gray-100 text-gray-300 px-1.5 py-0.5 my-0.5 rounded hover:scale-110 hover:font-black transition-all transition-ease' target={"_blank"} rel="noreferrer" href={data.links.official_forum_url[0]}>{data.links.official_forum_url[0].substring(0,30)}</a>
                
               
            </div>
                
            </div>

            </div>
       

            
        </div>
        
         : null
    }
    </div>
    
    </div>,
    document.getElementById("modal")
  )
}

export default CryptoDetails