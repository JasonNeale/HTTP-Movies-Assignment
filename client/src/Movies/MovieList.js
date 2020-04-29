import React from "react";
import MovieCard from "./MovieCard";
import { Row } from 'reactstrap'


function MovieList({ movies }) {
    return (
        <Row>
        {
            movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))
        }
        </Row>
  )
}

export default MovieList;
