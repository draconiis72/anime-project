import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AnimeMoviesAll = (props) => {
    const [allAnimeMovies, setAllAnimeMovies] = useState([]);
    const [headerMessage, setHeaderMessage] = useState();
    useEffect(() => {
        // axios calls to database
        axios
            .get("http://localhost:8000/api/animeMovies")
            .then((res) => {
                setAllAnimeMovies (res.data)
                setHeaderMessage("All Anime Movies")
            })
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

    const animeMovieGenres = (e, animeMoviesId, selectedGenre) => {
        setHeaderMessage((selectedGenre) + " Anime Movies");
        axios
            .get("http://localhost:8000/api/animeMovies/" + animeMoviesId)
            .then((res) => {
                console.log(res.data);
                setAllAnimeMovies(allAnimeMovies.filter((animeMovies) => animeMovies.genre === selectedGenre ));
                console.log(allAnimeMovies);
            })
            .catch((err) => console.log(err));        
    }

    const resetPage = (e) =>{

        axios
        .get("http://localhost:8000/api/animeMovies")
        .then((res) => {
            setAllAnimeMovies (res.data)
            setHeaderMessage("All Anime Movies")
        })
        .catch((err) => console.log(err));
    }

    
    return (
        <div>
            <h2> {headerMessage} </h2>
            <Link to="/animeMovies/new">
                <button>Add Anime Movie</button> 
            </Link>
            {
                allAnimeMovies.map((animeMovies, index) => (
                    <p key={index}>
                        <Link to={"/animeMovies/" + animeMovies._id}>
                            {<img src={animeMovies.image} alt={animeMovies.title} style={{borderRadius:"10px", width:"25%"}}/>}
                        </Link>
                        Submitted By:{animeMovies.submittedBy}
                        <button className = "floatBtn" onClick={ (e) => animeMovieGenres(e, animeMovies._id, animeMovies.genre)}>{animeMovies.genre}</button>
                        <Link to={"/animeMovies/" + animeMovies._id + "/edit"}>
                            <button className="floatBtn" >Edit</button>
                        </Link>
                        
                        <button className = "floatBtn" onClick={ (e) => deleteAnimeMovie(e, animeMovies._id)}>Delete</button>
                        <button className = "floatBtn" onClick={ (e) => addLike(e, animeMovies._id, animeMovies.numberOfLikes)}>Likes: {animeMovies.numberOfLikes}</button>
                    </p>
                ))
            }
            <Link onClick={ (e) => resetPage(e)}to={"/animeMoviesListing"}>Home</Link>            
        </div>
    )
}

export default AnimeMoviesAll;