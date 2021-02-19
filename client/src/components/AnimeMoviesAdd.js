import React, {useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const AnimeMoviesAdd = (props) => {
    const [image,setImage]= useState ("");
    const [title,setTitle]= useState("");
    const [genre,setGenre] = useState ("");
    const [director,setDirector] = useState("");
    const [releaseDate,setReleaseDate] = useState("");
    const [characters,setCharacters] = useState ("");
    const [length,setLength] = useState("");
    const [numberOfLikes,setNumberOfLikes] = useState("");
    const [description,setDescription] = useState("");
    const [submittedBy,setSubmittedBy] = useState("");
    const [errs, setErrs] = useState({});

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/animeMovies", {
                image: image,
                title: title,
                genre: genre,
                director: director,
                releaseDate: releaseDate,
                characters: characters,
                length: length,
                numberOfLikes: numberOfLikes,
                description: description,
                submittedBy: submittedBy,
            })
            .then((res) => {
                if (res.data.errors) {
                    setErrs(res.data.errors);
                }   else {
                    console.log(res.data._id);
                navigate("/animeMovies/" + res.data._id);

                }
            })
            .catch ((err) => console.log(err));

    }
    return (
        <div>
            <h2>Add Anime Movie</h2>
            <form onSubmit={submitForm}>
                <div>
                    <label>Image</label>
                    <input
                        type="text"
                        name="image"
                        onChange={ (e) => setImage(e.target.value)}
                    />
                    {errs.image ? (
                        <span style={{color:"red"}}>{errs.image.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        onChange={ (e) => setTitle(e.target.value)}
                    />
                    {errs.title ? (
                        <span style={{color:"red"}}>{errs.title.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Genre</label>
                    <select name="genre" onClick={ (e) => setGenre(e.target.value)}>
                        <option value="Horror">Horror</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Adventure">Adventure</option>
                        
                    </select>
                    {errs.genre ? (
                        <span style={{color:"red"}}>{errs.genre.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Director</label>
                    <input
                        type="text"
                        name="director"
                        onChange={ (e) => setDirector(e.target.value)}
                    />
                    {errs.director ? (
                        <span style={{color:"red"}}>{errs.director.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Release Date</label>
                    <input
                        type="text"
                        name="releaseDate"
                        onChange={ (e) => setReleaseDate(e.target.value)}
                    />
                    {errs.releaseDate ? (
                        <span style={{color:"red"}}>{errs.releaseDate.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Characters</label>
                    <input
                        type="text"
                        name="characters"
                        onChange={ (e) => setCharacters(e.target.value)}
                    />
                    {errs.characters ? (
                        <span style={{color:"red"}}>{errs.characters.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Length</label>
                    <input
                        type="text"
                        name="length"
                        onChange={ (e) => setLength(e.target.value)}
                    />
                    {errs.length ? (
                        <span style={{color:"red"}}>{errs.length.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={ (e) => setDescription(e.target.value)}
                    />
                    {errs.description ? (
                        <span style={{color:"red"}}>{errs.description.message}</span>
                    ) : null }
                </div>
                <div>
                    <Link to="/">
                        <button>Back</button> 
                    </Link>
                    <button type="submit">Submit Movie</button>
                </div>

            </form>
        </div>
    )
}

export default AnimeMoviesAdd;