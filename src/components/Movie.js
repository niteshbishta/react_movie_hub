import React, { useState, useEffect } from 'react'
import { Card , Button, Modal} from 'react-bootstrap'
import  Youtube  from 'react-youtube'
import axios from 'axios'
import Gallery from './Slider'


function Movie({title, poster_path, overview, release_date, vote_average, backdrop_path, id}) {

    const [lgShow, setLgShow] = useState(false);
    const [show, setShow]= useState(false)
    const [selectedMovie, setSelectedMovie] = useState([])


    const handleShow = ()=>{
        setShow(true)
          }
        
          const handleClose = ()=>{
            setShow(false)
              }
    
  const API_IMG= "https://image.tmdb.org/t/p/w500/";


  const apiurl = 'https://api.themoviedb.org/3'


  useEffect(()=>{
    const fetchTrailer = async ()=>{
      const{data} = await axios.get(`${apiurl}/movie/${id}?api_key=f7c7508de564c58aba1ce237a5f337cd&append_to_response=videos`)
      console.log(data)
      setSelectedMovie(data)
      
    }
    fetchTrailer()
  },[id])


  const renderT = () =>{
    const trailer = selectedMovie?.videos.results.find(vid => vid.name === 'Official Trailer')
    const opts = {
      playerVars : {
        height: '80vh',
        width: '80vw',
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }
    
    return(
      <div>
      <Youtube 
      videoId={trailer?.key}
      opts={opts}>

    </Youtube>
    </div>

    )
  }
    

  return (
    <Card className='my-3 p-3 rounded text-center movie_box'>

<Card.Img src={API_IMG+poster_path} variant ='top'></Card.Img>

<Card.Body>
<Card.Title as='div'><i style={{color:'#f5c518'}} className="fa-solid fa-star"></i> {vote_average.toString().slice(0,3) }    
            
            </Card.Title>
            <Card.Title >
            <strong>{title}</strong>
           
            </Card.Title>

            <Button className='trailer_btn' onClick={() => setLgShow(true)}><i className="fa-brands fa-youtube youtube_icon"></i>     Watch Trailer</Button>

            <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{margin:'0 auto'}}>
        {selectedMovie.videos ? renderT() : <i class="fa-regular fa-face-sad-tear"> Sorry Trailer not available</i> }
        </Modal.Body>
      </Modal>
      

          <hr></hr>
          
           < Button className='view_btn' variant="primary" onClick={handleShow}>View More  <i class="fa-solid fa-caret-down view_logo"></i></Button>
           <Modal 
           
           centered
           show={show} onHide={handleClose}>
       <Modal.Header closeButton>
        <Modal.Title >{selectedMovie.tagline}</Modal.Title>
</Modal.Header>



<Modal.Body >
<img className='card-img-top img-fluid' alt=''  style={{width: '30rem'}} src={API_IMG+backdrop_path}></img>
<h3>{title}</h3>
<h4>ImDb: {vote_average}</h4>
<h5>Release Date: {release_date}</h5>
<br></br>
<h6>{overview}</h6>

    <h1 className='text center'>Cast:</h1>


<div className='mt-3'>
    <Gallery id={id} />
</div>

</Modal.Body>
<Modal.Footer>


          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>

           </Modal>

</Card.Body>



    </Card>
  )
}

export default Movie