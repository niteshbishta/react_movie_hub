import React from "react";
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screen/HomeScreen";
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Trending from "./components/Trending";
import TopRated from "./components/TopRated";

function App() {
  return (
    <BrowserRouter>
  

      <Container>
      <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          
          <Route path='/toprated' element={<TopRated />} />
          <Route path='/trending' element={<Trending />} />
        </Routes>
    
      </Container>
     
  
    <Footer />
    </BrowserRouter>
  );
}

export default App;
