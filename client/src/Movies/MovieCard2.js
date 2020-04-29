import React from 'react'
import { Button } from 'reactstrap'
import axios from 'axios'


const MovieCard2 = (props) => {

    const { id, title, director, metascore, stars } = props.movie

    const handleClick = (e) => {
        document.location = `http://localhost:3000`
    }

    const handleUpdate = (e) => {
        document.location = `http://localhost:3000/update-movie/${id}`
    }

    const deleteMovie = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:5000/api/movies/${id}`)
        .then(res => {
            document.location = "http://localhost:3000"
            console.log( '[LOG] Axios Response (updateMovie): ', res.data )
        })
        .catch(( err ) => console.log( '[LOG] Axios Error (updateMovie): ', err ))
    }

    return (
        <div className="text-center">
            <h3>{title} (score: {metascore})</h3>
                <p>Director: <em>{director}</em></p>
                <p>
                    <h5>Actors</h5>
                    {stars.map(star => (
                        <span key={star.index}>{star}, </span>
                    ))}
                </p>
                <Button color="success" onClick={handleClick}>Go Back</Button>
                &nbsp;
                <Button color="primary" id={id} onClick={handleUpdate}>Update</Button>
                &nbsp;
                <Button onClick={deleteMovie} color="danger">Delete</Button>
        </div>
    )
}

export default MovieCard2
