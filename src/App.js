import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SingleMovie from "./components/SingleMovie";
import MovieID from "./components/MovieID";
import SearchQuery from "./components/SearchQuery";
import SearchForm from "./components/SearchForm";
import Register from "./components/Register";
import { context } from "./Context";
import Watchlist from "./components/Watchlist";


function App() {
  const [Search, setSearch] = useState("");
  const [Film, setFilm] = useState([]);
  const [filmS, setFilmS] = useState([]);
  const { wcount, setWcount } = useContext(context);

  const fetchData = async () => {
    const request = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=a131437a21e6a8972f940867927dc660`);
    const movies = await request.json();
    setFilm(movies.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  




  return (
    <BrowserRouter>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary" style={{borderBottom:'1px solid black'}}>
          <Container fluid>
            <Navbar.Brand href="#">TheMovieApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link href="#action1">About</Nav.Link>
                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
              </Nav>

              <SearchForm setFilmS={setFilmS} /> 
              <Nav.Link as={Link} to='/register' style={{position:'relative',marginLeft:'10px'}}>Watchlist<span style={{position:'absolute', color:'red',left:'60px',bottom:'8px', fontWeight:'700'}}>{wcount}</span></Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      <Routes>
        <Route path="/" element={<Home films={Film} />} />
        <Route path="/movies/:title" element={<MovieID result={Film} />} />
        <Route path="/search" element={<SearchQuery filmS={filmS} />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/wathclist" element={<Watchlist />} />
        <Route path="/movies/:id" element={<MovieID movies={Film}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;