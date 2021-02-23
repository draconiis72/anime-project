import React, {useState,} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const MembersAdd = (props) => {

    const [image,setImage]= useState ("");
    const [username,setUsername]= useState("");
    const [favoriteAnime,setFavoriteAnime] = useState("");
    const [memberSince,setmemberSince] = useState("");
    const [somethingAboutYou,setsomethingAboutYou] = useState ("");
    const [animesLiked,setAnimesLiked] = useState("");
    const [admin,setAdmin] = useState("");
    const [errs, setErrs] = useState({});


    // only axios verb and url id changed from add

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/members", {
                image: image,
                username: username,
                favoriteAnime: favoriteAnime,
                memberSince: memberSince,
                somethingAboutYou: somethingAboutYou,
                animesLiked: animesLiked,
                admin: false,
            })
            .then((res) => {
                if (res.data.errors) {
                    setErrs(res.data.errors);
                }   else {
                    console.log(res.data._id);
                navigate("/members/" + res.data._id);

                }
            })
            .catch ((err) => console.log(err));

    }
    return (
        <div>
            <h2>Add Profile</h2>
            <img src={image} alt={username} style={{borderRadius:"10px", width:"300"}}/>;
            <form onSubmit={submitForm}>
                <div>
                    <label>Image</label>
                    <input
                        type="text"
                        name="image"
                        value={image}
                        onChange={ (e) => setImage(e.target.value)}
                    />
                    {errs.image ? (
                        <span style={{color:"red"}}>{errs.image.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>NickName</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={ (e) => setUsername(e.target.value)}
                    />
                    {errs.title ? (
                        <span style={{color:"red"}}>{errs.title.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Favorite Anime</label>
                    <input
                        type="text"
                        name="favoriteAnime"
                        value={favoriteAnime}
                        onChange={ (e) => setFavoriteAnime(e.target.value)}
                    />
                    {errs.director ? (
                        <span style={{color:"red"}}>{errs.director.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Member Since</label>
                    <input
                        type="text"
                        name="memberSince"
                        value={memberSince}
                        onChange={ (e) => setmemberSince(e.target.value)}
                    />
                    {errs.releaseDate ? (
                        <span style={{color:"red"}}>{errs.releaseDate.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Something About You</label>
                    <input
                        type="text"
                        name="somethingAboutYou"
                        value={somethingAboutYou}
                        onChange={ (e) => setsomethingAboutYou(e.target.value)}
                    />
                    {errs.characters ? (
                        <span style={{color:"red"}}>{errs.characters.message}</span>
                    ) : null }
                </div>
                <div>
                    <label>Animes Liked</label>
                    <input
                        type="text"
                        name="animesLiked"
                        value={animesLiked}
                        onChange={ (e) => setAnimesLiked(e.target.value)}
                    />
                    {errs.length ? (
                        <span style={{color:"red"}}>{errs.length.message}</span>
                    ) : null }
                </div>
                <div>
                    <Link to="/members">
                        <button>Back</button> 
                    </Link>
                    <button type="submit">Update Profile</button>
                </div>

            </form>
        </div>
    )
}

export default MembersAdd;