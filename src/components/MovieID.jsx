import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const MovieID = ({ result}) => {
  const { title } = useParams();

  const normalize = (str) => str.trim().toLowerCase().replace(/s+/g, '+');

  console.log(title);

  const filmTitle = result.find(
    (element) => element.title && normalize(element.title) === normalize(title)
  );

  // console.log(filmTitle);

  if (!filmTitle) {
    return <div>Loading or movie not found...</div>; // Handle cases where the movie isn't found
  }

  return (
    <div>
      <Container style={{marginTop:'20px'}} className="justify-content-center align-items-center">
        <Row>
          <Col> 
            <img
              src={`https://image.tmdb.org/t/p/original${filmTitle.backdrop_path}`}
              alt={filmTitle.title || filmTitle.name}
              style={{borderRadius:'20px', height:'500px', width:'800px', marginTop:'10px'}}
            />
          </Col>
          <Col className="align-items-center">
          <h1>{filmTitle.title || filmTitle.name}</h1>
            <p>{filmTitle.overview}</p>
            <Button>Add to Watch List</Button>
          </Col>
          </Row>

        
      </Container>
    </div>
  );
};

export default MovieID;
