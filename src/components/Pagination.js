import React, {useContext} from 'react'
import paginationArrow from "../assets/pagination-arrow.svg"
import { CryptoContext } from '../context/CryptoContext';
const Pagination = () => {
    let {page, setPage, totalPage} = useContext(CryptoContext)
    const TotalNumber = Math.ceil(totalPage/100);

    const next = () => {
     
        if(page === TotalNumber){
            return null;
        } else {
            setPage( page + 1)
        }
    }
    const prev = () => {
   
        if(page === 1){
            return null;
        } else {
            setPage( page - 1)
        }
    }
    const multiStepNext = () => {
        if(page+3 >= TotalNumber){
            setPage(TotalNumber - 1)
        }else{
            setPage(page + 3)
        }
    }
    const multiStepPrev = () => {
        if(page-3 <= 1){
            setPage(TotalNumber + 1)
        }else{
            setPage(page - 2 )
        }
    }
  return (
    <div className='flex items-center'>
        <ul className='flex items-center justify-end text-sm'>
            <li className='flex items-center'>
                <button className='outline-0 hover:text-primary w-8' onClick={prev}>
                    <img className='rotate-180' src={paginationArrow}  alt="left" />
                </button>
            </li>
           {
            (page + 1 === TotalNumber || page === TotalNumber ) ? <li>
                <button onClick={multiStepPrev} className='outline-0 hover:text-primary rounded-full w-8 h-8 flex items-center justify-center text-lg'>...</button>
            </li> : null
           } 
           {
            (page-1 !== 0) ?  <li><button onClick={prev} className='outline-0 hover:text-primary rounded-full w-8 h-8 flex items-center justify-center mx-1.5'>{" "}{page - 1}{" "}</button></li> : null
           }
            <li><button disabled className='outline-0  rounded-full w-8 h-8 flex items-center justify-center mx-1.5'>{page}</button></li>
           {
            ( page+1 !== TotalNumber && page !== TotalNumber) ?  <li><button onClick={next} className='outline-0 hover:text-primary rounded-full w-8 h-8 flex items-center justify-center mx-1.5'>{page + 1}</button></li> : null
           }
           {
            page+1 !== TotalNumber && page !== TotalNumber ?  <li>
            {" "}
               <button onClick={multiStepNext} className='outline-0 hover:text-primary rounded-full w-8 h-8 flex items-center justify-center text-lg'>...</button>
            </li> : null
           }
           {
            page !== TotalNumber ?  <li>
                <button onClick={() => setPage(TotalNumber)} className='outline-0 hover:text-primary rounded-full w-8 h-8 flex items-center justify-center mx-1.5'>{TotalNumber}</button>
            </li> : null
           }
             <li>
                <button className='outline-0 hover:text-primary w-8' onClick={next}>
                    <img src={paginationArrow}  alt="right" />
                </button>
            </li>
        </ul>
    
    </div>
  )
}

export default Pagination