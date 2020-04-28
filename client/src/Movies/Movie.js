// External imports
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

// Local imports
import MovieCard from "./MovieCard"


const Movie = ({ addToSavedList }) => {
    // {
    //     id: 5,
    //     title: 'Tombstone',
    //     director: 'George P. Cosmatos',
    //     metascore: 89,
    //     stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
    // }
    const [movie, setMovie] = useState(null)
    const params = useParams()

    const fetchMovie = (id) => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err.response))
    }

    const saveMovie = () => {addToSavedList(movie)}

    useEffect(() => {fetchMovie(params.id)}, [params.id])

    if (!movie) {return <div>Loading movie information...</div>}

    return (
        <div className="save-wrapper">
            <MovieCard movie={movie} />
            <div className="save-button" onClick={saveMovie}>Save</div>
        </div>
      
      // Add a button in the movie component that routes you to your new route with the movies's id as the URL param
      // Add a delete button in the movie component that makes a DELETE request
      // When the call comes back successfully, route the user to /movies where they will see the updated movie list without the deleted movie
  )
}

export default Movie
