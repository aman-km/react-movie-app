import React, { useContext } from 'react'
import { context } from '../Context'
import { Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Watchlist() {

  const { watchlist, setWatchlist } = useContext(context);
  const {wcount, setWcount} = useContext(context);

  const clear = () => {
    setWatchlist([]);
    setWcount(0);
    
  }

  return (
    <div>
      <Container>
        <Button variant='danger' className='mt-4' onClick={clear}>Clear Watch List</Button>
        {watchlist.map((movies) => (
          <Card style={{ marginTop: '10px' }}>
            <Card.Img
              variant="top"
              src={movies.backdrop_path ? `https://image.tmdb.org/t/p/original${movies.backdrop_path}` : 'https://placehold.co/600x400/EEE/31343C'}
              alt={movies.title}
              style={{ width: '250px', height: '180px' }}
              id='watchlist-img'
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
              <Link to={`https://www.google.com/search?q=${movies.title}`} target='_blank'>
                <Button variant="primary">
                  Search On Google
                </Button>
              </Link>
            </Card.Body>
          </Card>

        ))}
      </Container>


    </div>
  )
}

export default Watchlist