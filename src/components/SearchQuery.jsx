import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const SearchQuery = ({ filmS }) => {
  const navigate = useNavigate();

  console.log(filmS);
  

  return (
    <div>
      <Container className="col-md-12 justify-content-center">
        <Row>
          {filmS.map((movie, index) => (
            <Card key={index} style={{ width: "18rem", marginTop:'10px', marginLeft:'10px' }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                style={{ width: "250px", height: "180px", borderRadius:'10px' }}

              />
              <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                  }}
                >
                  {movie.overview}
                </Card.Text>
                <Button
                  variant="primary"
                  as={Link}
                  to={`/movies/${movie.id}`}
                >
                  More Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SearchQuery;
