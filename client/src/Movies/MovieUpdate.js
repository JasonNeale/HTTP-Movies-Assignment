// External imports
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


const MovieUpdate = ({ addToSavedList }) => {

    const [movie, setMovie] = useState(null)
    const params = useParams()

    const fetchMovieUodate = ( id ) => {
        axios
            .get(`http://localhost:5000/api/movies/${params.id}`)
            .then((res) => {
                setMovie(res.data)
                console.log( '[LOG] Axios Response (fetchMovieUodate): ', res.data )
            })
            .catch(( err ) => console.log( '[LOG] Axios Error (fetchMovie): ', err ))
    }

    // {
    //     id: 5,
    //     title: 'Tombstone',
    //     director: 'George P. Cosmatos',
    //     metascore: 89,
    //     stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
    // }

    const updateMovie = (e) => {
        e.preventDefault()
        axios
        .put(`http://localhost:5000/api/movies/${params.id}`, movie)
        .then((res) => {
            document.location = "http://localhost:3000"
            console.log( '[LOG] Axios Response (updateMovie): ', res.data )
        })
        .catch(( err ) => console.log( '[LOG] Axios Error (updateMovie): ', err ))
    }

    useEffect(() => {
        fetchMovieUodate(params.id)
    }, [params.id])

    if (!movie) {
        return <div>Loading movie information...</div>
    }

    const handleChange = ( e ) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleStars = ( index ) => ( e ) => {
        setMovie({
            ...movie,
            stars: movie.stars.map((star, idx) => {
                return idx === index ? e.target.value : star
            })
        })
    }

    return (
        <Form onSubmit={updateMovie}>
            <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input type="text" name="title" id="title" onChange={handleChange} defaultValue={movie.title} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="director">Director</Label>
                <Input type="text" name="director" id="director" onChange={handleChange} defaultValue={movie.director} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="metascore">Metascore</Label>
                <Input type="number" name="metascore" id="metascore" onChange={handleChange} defaultValue={movie.metascore} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="stars">Stars (Separate with comma)</Label>
                <Input type="text" name="stars" id="stars" onChange={handleStars} defaultValue={movie.stars} />
            </FormGroup>
            <Button color="primary">Update</Button>
        </Form>
    )
}

export default MovieUpdate