import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const MembersAll = (props) => {
    const [allMembers, setAllMembers] = useState([]);
    useEffect(() => {
        // axios calls to database
        axios
            .get("http://localhost:8000/api/members")
            .then((res) => {
                setAllMembers (res.data)
            })
            .catch((err) => console.log(err));

    }, []);

    const deleteMember = (e, memberId) => {
        axios
            .delete("http://localhost:8000/api/members/" + memberId)
            .then((res) => {
                console.log(res.data);
                setAllMembers(allMembers.filter((members) => members._id !== memberId ));
            })
            .catch((err) => console.log(err));        
    }
    
    return (
        <div>
            <h2> Members </h2>                    
                <Link to={"/members/new"}>
                    <button className="floatBtn">Add Member</button> 
                </Link>
                <Link to={"/animeMoviesListing"}>
                    <button className="floatBtn">Anime Listings</button> 
                </Link>
                <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Public Image</th>
                            <th>NickName</th>
                            <th>Member Since</th>
                            <th>Actions</th>
                        </tr>
                        {allMembers.map(members => (
                            <tr key={members._id}>
                                <td><Link to={"/members/" + members._id}>
                                    {<img src={members.image} alt={members.username} style={{borderRadius:"10px", width:"25%"}}/>}
                                    </Link>
                                </td>
                                <td>{members.username}</td>
                                <td>{members.memberSince}   
                                </td>
                                <td>
                                    <Link to={"/members/" + members._id + "/edit"}>
                                        <button className="floatBtn" >Edit</button>
                                    </Link>
                                    <button className = "floatBtn" onClick={ (e) => deleteMember(e, members._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>       
        </div>
    )
}

export default MembersAll;