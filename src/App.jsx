import { useState,useEffect } from 'react'
import "./App.css"
import Hero_Cards from './components/Hero_Cards'
import axios from 'axios';
import config from '../config';


function App() {
  const {apiKey,hash} = config;
 
  const urlApi = `https://gateway.marvel.com/v1/public/characters?ts=1&limit=100&apikey=${apiKey}&hash=${hash}`;

  const [url,setUrl] = useState(urlApi)
  const [heroData,setHeroData] = useState([]);
  const [search,setSearch] = useState([])

  useEffect(() => {
    // const apiKey = config.apiKey;
    // const hash = config.hash;
    try{
    const axi = async () => {
      const res = await axios.get(url);
      const heroData = res.data.data.results;
      setHeroData(heroData);
    }
    axi()
  }catch{
    return
  }
},[url])

  const searchMarvel = () => {
     search !== "" && setUrl(`https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${search}&apikey=${apiKey}&hash=${hash}`)
  }

  return (
    <>
      <div className='header'>
          <div className='bg'>
            <img src="./Images/pxfuel.jpg" alt="" />
          </div>

          <div className='search-bar'>
            <img src="./Images/marvel.png" alt="" />
            <input onChange={e=>setSearch(e.target.value)} type="search" placeholder='Enter charachter' onKeyUp={searchMarvel} />
          </div>
      </div>

      <div className='content'>
          {
            heroData.map((item) => {
              return(
              <div key={item.id}> 
                  <Hero_Cards id={item.id} names={item.name} pic={item.thumbnail.path} ext={item.thumbnail.extension} />
              </div>
              )
            })
          }
      </div>
    </>
  )
}

export default App
