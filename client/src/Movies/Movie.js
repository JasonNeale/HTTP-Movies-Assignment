// External imports
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Button, Row, Col } from 'reactstrap'

// Local imports
import MovieCard2 from "./MovieCard2"


const Movie = ({ addToSavedList }) => {

    // {
    //     id: 5,
    //     title: 'Tombstone',
    //     director: 'George P. Cosmatos',
    //     metascore: 89,
    //     stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
    // }

    const [ movie, setMovie ] = useState( null )
    const params = useParams()

    const fetchMovie = ( id ) => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then((res) => {
                setMovie(res.data)
                console.log( '[LOG] Axios Response (fetchMovie): ', res.response )
            })
            .catch(( err ) => console.log( '[LOG] Axios Error (fetchMovie): ', err.response ))
    }

    // deleteMovie = event => {
    //     event.preventDefault();
    //     axios.delete(`http://localhost:5000/api/movies/${this.state.movie.id}`)
    //       .then(res => {
    //         console.log(res)
    //         this.props.history.push('/');
    //       })
    //   }

    const saveMovie = () => {
        addToSavedList(movie)
    }

    useEffect(() => {
        fetchMovie(params.id)
    }, [params.id])

    if (!movie) {
        return <div>Loading movie information...</div>
    }

    return (
        <MovieCard2 movie={movie} />
      
      // Add a button in the movie component that routes you to your new route with the movies's id as the URL param
      // Add a delete button in the movie component that makes a DELETE request
      // When the call comes back successfully, route the user to /movies where they will see the updated movie list without the deleted movie
  )
}

export default Movie
