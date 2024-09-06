import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { context } from '../Context'; // Make sure this path is correct

const SingleMovie = ({ movies }) => {
  const { wcount, setWcount } = useContext(context);


  const addition = () => {
    setWcount(wcount + 1);
    console.log(wcount);

    
  };

  return (
    <div>
      <Card style={{ marginTop: '10px' }}>
        <Card.Img 
          variant="top" 
          src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} 
          alt={movies.title}
          style={{ width: '250px', height: '180px' }} 
        />
        <Card.Body>
          <Card.Title>{movies.title || movies.name}</Card.Title>
          <Card.Text style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
          }}>
            {movies.overview || "No description available."}
          </Card.Text>
          <Button variant="success" onClick={addition}>
            Add to Watchlist
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleMovie;
