import React,{useState, useEffect} from 'react'
import axios from 'axios'

import {Col, Row  } from 'react-bootstrap'
import Movie from '../components/Movie'



function HomeScreen() {
    const [movies, setMovies] = useState([])
    

    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=f7c7508de564c58aba1ce237a5f337cd"

    
useEffect(()=>{
    axios.get(API_URL)
    .then((res)=>{
        console.log(res.data)
        setMovies(res.data.results)
    })
},[])



   




   
  return (
    <>

    <Row>
        {movies.map((movie =>(
     <Col sm={12} md={6} lg={4} xl={3}>
         <Movie {...movie} />

     </Col>

        )))}
      
    </Row>
    
    </>
  )
}

export default HomeScreen