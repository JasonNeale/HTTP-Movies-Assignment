// External imports
import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const SavedList = ({ list }) => {
    return (
        <div className="saved-list">
            <br /><br />
            
            {list.map(movie => {
                return (
                    <NavLink
                        to={`/movies/${movie.id}`}
                        key={movie.id}
                        activeClassName="saved-active"
                    >
                        <span className="saved-movie">{movie.title}</span>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default SavedList