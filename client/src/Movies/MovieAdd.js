// External imports
import React, {useState} from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


const MovieAdd = () => {

    const [movie, setMovie] = useState({
        id: "",
        title: "",
        director: "",
        metascore: "",
        stars: []
    })
    
    const addMovie = (e) => {
        console.log('movie: ', movie)
        e.preventDefault()
        axios
        .post(`http://localhost:5000/api/movies`, movie)
        .then((res) => {
            document.location = "http://localhost:3000"
            console.log( '[LOG] Axios Response (addMovie): ', res.data )
        })
        .catch(( err ) => console.log( '[LOG] Axios Error (addMovie): ', err ))
    }

    const handleChange = ( e ) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleStars = ( e ) => {
        // setMovie({
        //     ...movie,
        //     stars: movie.stars.map((star, idx) => {
        //         return idx === index ? e.target.value : star
        //     })
        // })
        let starsArr = e.target.value.split(',')
        console.log('starsArr: ', starsArr)

        setMovie({
            ...movie,
            stars: starsArr
        })
        console.log('setMovie - stars: ', movie.stars)
    }

    return (
        <Form onSubmit={addMovie}>
            <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input type="text" name="title" id="title" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="director">Director</Label>
                <Input type="text" name="director" id="director" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="metascore">Metascore</Label>
                <Input type="number" name="metascore" id="metascore" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="stars">Stars (Separate with comma)</Label>
                <Input type="text" name="stars" id="stars" onChange={handleStars} />
            </FormGroup>
            <Button color="primary">Add Movie</Button>
        </Form>
    )
}

export default MovieAdd