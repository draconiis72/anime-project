import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AnimeMoviesAll = (props) => {
    const [allAnimeMovies, setAllAnimeMovies] = useState([]);

    useEffect(() => {
        // axios calls to database
        axios
            .get("http://localhost:8000/api/animeMovies")
            .then((res) => setAllAnimeMovies (res.data))
            .catch((err) => console.log(err));

    }, []);

    const deleteAnimeMovie = (e, animeMoviesId) => {
        axios
            .delete("http://localhost:8000/api/animeMovies/" + animeMoviesId)
            .then((res) => {
                console.log(res.data);
                setAllAnimeMovies(allAnimeMovies.filter((animeMovies) => animeMovies._id !== animeMoviesId ));
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <h2> All Anime Movies listed Here </h2>
            <Link to="/animeMovies/new">
                <button>Add Anime Movie</button> 
            </Link>
            {
                allAnimeMovies.map((animeMovies, index) => (
                    <p key={index}>
                        <Link to={"/animeMovies/" + animeMovies._id}>{<img src={animeMovies.image} alt={animeMovies.title} style={{borderRadius:"10px", width:"25%"}}/>}</Link>
                        <Link to={"/animeMovies/" + animeMovies._id + "/edit"}>
                            <button className="floatBtn" >Edit</button>
                        </Link>
                        <button className = "floatBtn" onClick={ (e) => deleteAnimeMovie(e, animeMovies._id)}>Delete</button>
                        <button className = "floatBtn" onClick={ (e) => animeMovies.numberOfLikes = animeMovies.numberOfLikes+1}>Likes: {animeMovies.numberOfLikes}</button>
                    </p>
                ))
            }
            
        </div>
    )
}

export default AnimeMoviesAll;