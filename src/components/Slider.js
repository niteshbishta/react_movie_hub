import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios'

const handleDragStart = (e) => e.preventDefault();


const Gallery = ({id}) => {

    const[credits, setCredits]= useState([])


  

    useEffect(()=>{
        const fetchCredits = async ()=>{
          const{data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f7c7508de564c58aba1ce237a5f337cd&append_to_response=credits`)
          console.log(data.credits)
          setCredits(data.credits.cast)
          
        }
        fetchCredits()
      },[id])


      const API_IMG= "https://image.tmdb.org/t/p/w500/";

      const items = credits.map((c)=>(
        <div className='carouselItem'>
            <img src={c.profile_path? API_IMG+c.profile_path : 'nopicture'} alt={c?.name}
            onDragStart={handleDragStart} className='cast_img'
            ></img>
            
    
            <b className='text-center'>{c?.name}</b>
        </div>
    ))


    const responsive ={
        0:{
            items: 3,
        },

        512: {
            items: 5
        },

        1024: {
            ites: 7
        },
    };
  return (
    <AliceCarousel autoPlay  responsive={responsive} infinite disableDotsControls disableButtonsControls mouseTracking items={items} />
  );
}

export default Gallery