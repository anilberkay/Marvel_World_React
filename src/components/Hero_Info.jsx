import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import config from '../../config';


const Hero_Info = () => {
    
    const [item,setItem] = useState([]);

    const {apiKey,hash} = config;

    const {id} = useParams();

    useEffect(() => {
        const axi = async () => {
            const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${apiKey}&hash=${hash}`)
            setItem(res.data.data.results)
        }
        axi();
    }
        ,[])

        return (
            <div className='cont-hero'>
                {
                    item?.map((data) => {
                        return(
                                <div className='hero-single-data' key={data?.id}>

                                    <img className='hero-single-img' src={data?.thumbnail.path+"."+data.thumbnail.extension} alt="" /> 


                                    <div className='hero-single-text'>
                                        <p className='hero-single-name'>{data.name}</p>   

                                        <p className='hero-single-detail'>{data.description ? data.description : "There is no information about this character."}</p>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
          )
}

export default Hero_Info