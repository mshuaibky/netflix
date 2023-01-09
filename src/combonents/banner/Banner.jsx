import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import { API_KEY } from '../../costants/constants';
import { imageUrl } from '../../costants/constants';
import './Banner.css';
function Banner() {
  const [Movie,setMovie]=useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
   let random= Math.floor( Math.random()*20) 
      setMovie(response.data.results[random])
    })
  

  }, [])
  
  return (
    <div style={{backgroundImage:`url(${Movie?imageUrl+Movie.backdrop_path:""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{Movie?Movie.title : ""}</h1>
            <div className='banner-buttons'>
                <button className='buttons'>Play</button>
                <button className='buttons' >My List</button>

            </div>
            <h1 className='describtion'>{Movie?Movie.overview : ''}  </h1>
        </div>
        <div className="fade_bottom"></div>
      
    </div>
  )
}

export default Banner;
