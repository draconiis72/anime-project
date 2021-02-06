import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const LabelEdit = (props) => {

const [title,setTitle]= useState("");
    const [genre,setGenre] = useState ("");
    const [director,setDirector] = useState("");
    const [date,setDate] = useState("");
    const [cast,setCast] = useState ("");
    const [length,setLength] = useState("");
    const [errs, setErrs] = useState({});

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/label/" + props.labelling_id)
        .then((res) => {
            console.log(res.data);
            setTitle(res.data.title);
            setGenre(res.data.genre);
            setDirector(res.data.director);
            setDate(res.data.date);
            setCast(res.data.cast);
            setLength(res.data.length);
        })    
        .catch((err) => console.log("Failed to pull label" + err));

    }, []);

    // only axios verb and url id changed from add

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/label/" + props.labelling_id, {
                title: title,
                genre: genre,
                director: director,
                date: date,
                cast: cast,
                length: length
            })
            .then((res) => {
                if (res.data.errors) {
                    setErrs(res.data.errors);
                }   else {
                    console.log(res.data._id);
                navigate("/label/" + res.data._id);

                }
            })
            .catch ((err) => console.log(err));

    }
    return (
        <div>
            <h2>Edit Label</h2>
            <form onSubmit={submitForm}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)}
                    />
                    {errs.title ? (
                        <span style={{color:"red"}}>{errs.title.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Genre</label>
                    <select name="genre" defaultValue={genre} onClick={ (e) => setGenre(e.target.value)}>
                        <option value="Horror">Horror</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Anime">Anime</option>
                        
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
                        value={director}
                        onChange={ (e) => setDirector(e.target.value)}
                    />
                    {errs.director ? (
                        <span style={{color:"red"}}>{errs.director.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type="text"
                        name="date"
                        value={date}
                        onChange={ (e) => setDate(e.target.value)}
                    />
                    {errs.date ? (
                        <span style={{color:"red"}}>{errs.date.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Cast</label>
                    <input
                        type="text"
                        name="cast"
                        value={cast}
                        onChange={ (e) => setCast(e.target.value)}
                    />
                    {errs.cast ? (
                        <span style={{color:"red"}}>{errs.cast.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Length</label>
                    <input
                        type="text"
                        name="length"
                        value={length}
                        onChange={ (e) => setLength(e.target.value)}
                    />
                    {errs.length ? (
                        <span style={{color:"red"}}>{errs.length.message}</span>
                    ) : null }
                </div>
                <div>
                    <Link to="/">
                        <button>Back</button> 
                    </Link>
                    <button type="submit">Update Label</button>
                </div>

            </form>
        </div>
    )
}

export default LabelEdit;