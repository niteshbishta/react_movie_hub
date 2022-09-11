import React ,{useState} from 'react'
import { Button, Container, Form, Nav, Navbar, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Movie from './Movie'

function Header() {

    const [moviess, setMoviess] = useState([])
    const [query, setQuery]= useState('')

  

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching")
    try{
     
      if(query){
        
     
        const url = `https://api.themoviedb.org/3/search/movie?api_key=ab1baae48a83bc3815bf0ac68d168b85&query=${query}`

        const res = await axios.get(url)
        
        console.log(res)
        setMoviess(res.data.results)     
      }

      setQuery('')
    } catch(e){
          console.log(e)
    }
  
  }

  const changeHandler = (e)=>{
    setQuery(e.target.value)
  }



  return (
      <>

<Navbar className='navbar' variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand>Movie Hub  <i class="fa-solid fa-film"></i></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
         
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/toprated'>Top Rated</Nav.Link>
            <Nav.Link href='/trending'>Trending</Nav.Link>
      
           
          </Nav>
          <Form className="d-flex" onSubmit={searchMovie} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="query"
              value={query} onChange={changeHandler}
            />
            <Button variant="dark" type='search'><i class="fa-solid fa-magnifying-glass search_logo"></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


<Container>
  
</Container>



 
  <Row>
        {moviess?.map(search => (
            <Col key={search.id} sm={12} md={6} lg={4} xl={3}>
               <Movie {...search}/>
            </Col>
            
        ))}
      
     </Row>

</>
  )
}

export default Header