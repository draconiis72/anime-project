import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const LabelOne = (props) => {
    const [oneLabel, setOneLabel] = useState({});

    useEffect(() => {
        // axios calls to database
        axios
            .get("http://localhost:8000/api/label/" + props.id)
            .then((res) => setOneLabel (res.data))
            .catch((err) => console.log(err));

    }, []);
    return (
        <div>
            <h2> {oneLabel.title} </h2>
            {/* for adding images use this type of code
            <img src={oneLabel.coverArt} alt={oneLabel.title} style={{borderRadius:"10px", width:"300"}}/> */}
            <p>Genre: {oneLabel.genre}</p>
            <p>Director: {oneLabel.director}</p>
            <p>Date: {oneLabel.date}</p>
            <p>Cast: {oneLabel.cast}</p>
            <p>Length: {oneLabel.length}</p>
            <Link to="/">
                <button>Back</button>
            </Link>
            
        </div>
    )
}

export default LabelOne;