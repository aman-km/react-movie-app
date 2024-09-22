import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ setFilmS }) => {
  const [Search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = Search.trim().replace(/\s+/g, '+');
    const sRequest = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=[your-api-key]&query=${query}`);
    const sMovies = await sRequest.json();
    setFilmS(sMovies.results);
    navigate('/search'); 
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={Search}
        onChange={handleInputChange}
      />
      <Button variant="outline-success" type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
