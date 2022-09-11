import React,{useState, useEffect}  from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import Movie from './Movie'


function Trending() {

    const [cmovies, setCMovies] = useState([])

const CAPI= "https://api.themoviedb.org/3/trending/all/day?api_key=f7c7508de564c58aba1ce237a5f337cd&language=en-US&page=1"

    
useEffect(()=>{
    axios.get(CAPI)
    .then((res)=>{
        console.log(res.data)
        setCMovies(res.data.results)
    })
},[])

  return (
    <>
    <Row>
        {cmovies.map((cmovie =>(
     <Col sm={12} md={6} lg={4} xl={3}>
        <Movie {...cmovie} />

     </Col>

        )))}
      
    </Row>
    </>
  )
}

export default Trending