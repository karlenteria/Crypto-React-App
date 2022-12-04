import { createContext, useLayoutEffect, useState } from "react";



export const CryptoContext = createContext({});

export const CryptoProvider = ({children}) => {
    const[cryptoData, setCryptoData] = useState();
    const[searchData, setSearchData] = useState();
    const[coinData, setCoinData] = useState();
    const[coinSearch, setCoinSearch] = useState("");
    const[currency, setCurrency] = useState("usd");
    const[page, setPage] = useState(1);
    const[totalPage, setTotalPage] = useState(250)
  


    const getCryptoData = async () => {
        try{
            const api = await fetch(`https://api.coingecko.com/api/v3/coins/list`).then(response => response.json()).then(json => json);
            console.log(api)
            console.log(cryptoData)
            setTotalPage(api.length);
          
            
        } catch(error){
            console.log(error)
        }
        try{
            const api = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`).then(response => response.json()).then(json => json);
            //  console.log(api)
            setCryptoData(api)
            
        } catch(error){
            console.log(error)
        }
    }

      const getCoinData = async (coinid) => {
 
        try{
            const data = `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false` 
            const api = await fetch(data).then(response => response.json()).then(json => json);

            // console.log(api)
            setCoinData(api)
            
        } catch(error){
            console.log(error)
        }
    }
   
      const getSearchResult = async (query) => {
        try{
            const data = `https://api.coingecko.com/api/v3/search?query=${query} `
            const api = await fetch(data).then(response => response.json()).then(json => json);
            console.log(api)
            setSearchData(api.coins)

        } catch(error){
            console.log(error)
        }
    }
    const clearSearch = () => {
        setPage(1)
        setCoinSearch("")
    }

    useLayoutEffect(() => {
        getCryptoData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coinSearch, currency, page])
    return (
        <CryptoContext.Provider value={{cryptoData, searchData, getSearchResult, setCoinSearch, setSearchData, currency, setCurrency, page, setPage, totalPage, clearSearch, getCoinData, coinData}}>
        {children}

        </CryptoContext.Provider>
    )
}