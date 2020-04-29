import React from 'react'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'
import axios from 'axios'


const MovieCard = (props) => {

    const { id, title, director, metascore, stars } = props.movie

    const handleView = (e) => {
        document.location = `http://localhost:3000/movies/${id}`
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
        <Col md="4" className="movie-card-col">
            <Row md="1">
                <Card body className="movie-card">
                    <CardTitle><h3>{title} (score: {metascore})</h3></CardTitle>
                        <h5>Director: <em>{director}</em></h5>
                        <h5>Actors</h5>
                        <ul>
                            {stars.map(star => (
                                <li key={star}>{star}</li>
                            ))}
                        </ul>
                    <div className="movie-card-button-row">
                        <Button onClick={handleView} id={id} color="success">View</Button>
                        &nbsp;<Button onClick={handleUpdate} id={id} color="primary">Update</Button>
                        &nbsp;<Button onClick={deleteMovie} color="danger">Delete</Button>
                    </div>
                </Card>
            </Row>
        </Col>
    )
}

export default MovieCard
