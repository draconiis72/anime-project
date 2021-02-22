import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AnimeMoviesGenre = (props) => {
    const [allAnimeGenres, setAllAnimeGenres] = useState([]);

    useEffect(() => {
        // axios calls to database
        axios
            .get("http://localhost:8000/api/animeMovies")
            .then((res) => setAllAnimeGenres (res.data))
            .catch((err) => console.log(err));

    }, []);

    const deleteAnimeMovie = (e, animeMoviesId) => {
        axios
            .delete("http://localhost:8000/api/animeMovies/" + animeMoviesId)
            .then((res) => {
                console.log(res.data);
                setAllAnimeGenres(allAnimeGenres.filter((animeMovies) => animeMovies._id !== animeMoviesId ));
            })
            .catch((err) => console.log(err));

            
    }
    const addLike = (e, animeMoviesId, addedLike) => {
        axios
            .put("http://localhost:8000/api/animeMovies/" + animeMoviesId, {
                numberOfLikes: addedLike + 1
            })
            .then((res) => {
                console.log("1 new like added");
            })
            .catch ((err) => console.log(err));

    }
    return (
        <div>
            <h2> All Anime Movies listed Here </h2>
            <Link to="/animeMovies/new">
                <button>Add Anime Movie</button> 
            </Link>
            {
                allAnimeGenres.map((animeMovies, index) => (
                    <p key={index}>
                        <Link to={"/animeMovies/" + animeMovies._id}>
                            {<img src={animeMovies.image} alt={animeMovies.title} style={{borderRadius:"10px", width:"25%"}}/>}
                        </Link>
                        <span>Submitted By:</span>{animeMovies.submittedBy}
                        {animeMovies.genre}
                        <Link to={"/animeMovies/" + animeMovies._id + "/edit"}>
                            <button className="floatBtn" >Edit</button>
                        </Link>
                        <button className = "floatBtn" onClick={ (e) => deleteAnimeMovie(e, animeMovies._id)}>Delete</button>
                        <button className = "floatBtn" onClick={ (e) => addLike(e, animeMovies._id, animeMovies.numberOfLikes)}>Likes: {animeMovies.numberOfLikes}</button>
                    </p>
                ))
            }
            
        </div>
    )
}

export default AnimeMoviesGenre;
