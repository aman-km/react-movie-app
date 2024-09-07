import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { context } from "../Context";
import { Link } from "react-router-dom";

const MovieID = ({ result}) => {
  const { id } = useParams();
  const movieId = result.find((element) => element.id === Number(id));

  // Use Contexts
  const { wcount, setWcount } = useContext(context);
  const {watchlist, setWatchlist} = useContext(context);

  const watchlistF = (ele) => {
    setWcount(wcount+1);
    setWatchlist([...watchlist, movieId]);
  }


  if (!id) {
    return <div>Loading or movie not found...</div>; // Handle cases where the movie isn't found
  }

  return (
    <div>
      <Container style={{marginTop:'20px'}} className="justify-content-center align-items-center">
        <Row>
          <Col> 
            <img
              src={`https://image.tmdb.org/t/p/original${movieId.backdrop_path}`}
              alt={movieId.title || movieId.name}
              style={{borderRadius:'20px', height:'500px', width:'800px', marginTop:'10px'}}
            />
          </Col>
          <Col className="align-items-center">
          <h1>{movieId.title || movieId.name}</h1>
            <p>{movieId.overview}</p>
            <Link to={'/watchlist'}>
            <Button onClick={watchlistF}>Add to Watch List</Button>
            </Link>
          </Col>
          </Row>

        
      </Container>
    </div>
  );
};

export default MovieID;
