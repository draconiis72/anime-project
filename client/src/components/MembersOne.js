import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const MembersOne = (props) => {
    const [membersOne, setMembersOne] = useState({});

    useEffect(() => {
        // axios calls to database
        axios
            .get("http://localhost:8000/api/members/" + props.id)
            .then((res) => setMembersOne (res.data))
            .catch((err) => console.log(err));

    }, []);
    return (
        <div>
            <h2> {membersOne.username} </h2>
            <img src={membersOne.image} alt={membersOne.username} style={{borderRadius:"10px", width:"300"}}/>
            <p>Favorite Anime: {membersOne.favoriteAnime}</p>
            <p>Member Since: {membersOne.memberSince}</p>
            <p>Something About You: {membersOne.somethingAboutYou}</p>
            <p>Animes Liked: {membersOne.animesLiked}</p>
            <Link to="/members">
                <button>Back</button>
            </Link>
            
        </div>
    );
}

export default MembersOne;