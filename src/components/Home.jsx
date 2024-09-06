import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import SingleMovie from './SingleMovie';
import { Link } from 'react-router-dom';

const Home = ({ films }) => {
  // console.log(films);  // Log the films array

  if (!films || films.length === 0) {
    return <div>Loading...</div>;  // Show loading if no films
  }

  return (
    <div>
      <Carousel>
        {films.map((film, index) => (
          <Carousel.Item key={index}>
           <Link to={`/movies/${film.title}`}>
            <img 
              src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} 
              alt={film.title || film.name} 
              width={"100%"} 
            />
            </Link>
            
            <Carousel.Caption>
              <h3 style={{ color: 'white', fontSize: '30px' }}>{film.title || film.name}</h3>
              <p>{film.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container className='col-md-12'>
        <Row>
          
        {films.map((filmss, ukey) => (
          <Col>
          <SingleMovie movies={filmss} key={ukey}/>
          </Col>
        ))}
        
        </Row>
      </Container>
    </div>
  );
};

export default Home;
