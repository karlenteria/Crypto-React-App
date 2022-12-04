import React, {useContext, useState} from 'react'
import debounce from 'lodash.debounce'
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from '../context/CryptoContext';

const SearchInput = ({handleSearch}) => {
    const [searchText, setSearchText] = useState("");
let {searchData, setCoinSearch, setSearchData} = useContext(CryptoContext)

    let handleChange = (e) => {
        e.preventDefault();
        let query = e.target.value
        setSearchText(query)
        handleSearch(query)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchText)
    }
    const selectCoin = (coin) => {
        setCoinSearch(coin)
        setSearchText("")
        setSearchData()
    }
    return(
        <>
        <form className='w-96 relative flex items-center ml-7 font-nunito z-5'
        onSubmit={handleSubmit}>
        <input className='w-full rounded placeholder:text-gray-200 pl-2 required outline-0 border border-transparent focus:border-primary text-gray-300' 
        placeholder="Search" 
        type="text" 
        name="search"
        onChange={handleChange}
        value={searchText}
        />
        <button type="submit"
        className='absolute right-1 cursor-pointer hover:scale-110 transition-all transition-ease'>
            <img className="w-full h-auto" src={searchIcon} alt="search"/>
        </button>
    </form>
    {
        searchText.length > 0 ?
        <ul className='absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-primary bg-opacity-60 backdrop-blur-md'>
            {
                searchData ? searchData.map(coin => {return <li className='flex items-center ml-4 my-2 cursor-pointer hover:bg-gray-100'
                key={coin.id}
                onClick={() => selectCoin( coin.id)}>
                <img className='w-[1rem] h-[1rem] mx-1.5' src={coin.thumb} alt={coin.name} /> 
                <span>{coin.name}</span>
                </li>}) : <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-8 h-8 border-4 border-primary rounded-full border-b-gray-100 animate-spin'
                    role="status" />
                    <span className='ml-left-2'>Searching</span>
                </div>
            }
        </ul> : null
    } 
    </>
    )
}
const Search = () => {
    
    let {getSearchResult} = useContext(CryptoContext);

    const debounceFunction = debounce(function(val){
        getSearchResult(val)
    }, 1000)    
  return (
    <div className='relative'>
        <SearchInput handleSearch={debounceFunction}/>
    </div>
  )
}

export default Search