import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AnimeMoviesOne = (props) => {
    const [animeMoviesOne, setAnimeMoviesOne] = useState({});

    useEffect(() => {
        // axios calls to database
        axios
            .get("http://localhost:8000/api/animeMovies/" + props.id)
            .then((res) => setAnimeMoviesOne (res.data))
            .catch((err) => console.log(err));

    }, []);
    return (
        <div>
            <h2> {animeMoviesOne.title} </h2>
            <img src={animeMoviesOne.image} alt={animeMoviesOne.title} style={{borderRadius:"10px", width:"300"}}/>
            <p>Genre: {animeMoviesOne.genre}</p>
            <p>Director: {animeMoviesOne.director}</p>
            <p>Release Date: {animeMoviesOne.releaseDate}</p>
            <p>Characters: {animeMoviesOne.characters}</p>
            <p>Length: {animeMoviesOne.length}</p>
            <p>Number Of Likes: {animeMoviesOne.numberOfLikes}</p>
            <p>Description: {animeMoviesOne.description}</p>
            <p>Submitted By: {animeMoviesOne.submittedBy}</p>
            <Link to="/animeMoviesListing">
                <button>Back</button>
            </Link>
            
        </div>
    );
}

export default AnimeMoviesOne;