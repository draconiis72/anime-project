import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const LabelAll = (props) => {
    const [allLabels, setAllLabels] = useState([]);

    useEffect(() => {
        // axios calls to database
        axios
            .get("http://localhost:8000/api/label")
            .then((res) => setAllLabels (res.data))
            .catch((err) => console.log(err));

    }, []);

    const deleteLabel = (e, labelsId) => {
        axios
            .delete("http://localhost:8000/api/label/" + labelsId)
            .then((res) => {
                console.log(res.data);
                setAllLabels(allLabels.filter((labels) => labels._id !== labelsId ));
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <h2> All Labels listed Here </h2>
            <Link to="/label/new">
                <button>Add Label</button> 
            </Link>
            {
                allLabels.map((labels, index) => (
                    <p key={index}>
                        <Link to={"/label/" + labels._id}>{labels.title}</Link>
                        <Link to={"/label/" + labels._id + "/edit"}>
                            <button className="floatBtn" >Edit</button>
                        </Link>
                        <button className = "floatBtn" onClick={ (e) => deleteLabel(e, labels._id)}>Delete</button>
                    </p>
                ))
            }
            
        </div>
    )
}

export default LabelAll;