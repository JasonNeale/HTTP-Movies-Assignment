// External imports
import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'

// Local imports
import SavedList from "./Movies/SavedList"
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import MovieUpdate from './Movies/MovieUpdate'
import NavMenu from './Movies/NavMenu'
import MovieAdd from './Movies/MovieAdd'


const App = () => {
    const [savedList, setSavedList] = useState([])
    const [movieList, setMovieList] = useState([])

    const getMovieList = () => {
        axios
            .get("http://localhost:5000/api/movies")
            .then(res => setMovieList(res.data))
            .catch(err => console.log(err.response));
    }

    const addToSavedList = movie => {
        setSavedList([...savedList, movie])
    }

    useEffect(() => {
        getMovieList()
    }, [])

    // Stretch
    // Add a route at the path /add-movie


    return (
        <Container>
            <NavMenu />
            <SavedList list={savedList} />
            <Route exact path="/"><MovieList movies={movieList} /></Route>
            <Route exact path="/add-movie"><MovieAdd /></Route>
            <Route path="/movies/:id"><Movie addToSavedList={addToSavedList} /></Route>
            <Route path="/update-movie/:id"><MovieUpdate addToSavedList={addToSavedList} /></Route>
        </Container>
    )
}

export default App