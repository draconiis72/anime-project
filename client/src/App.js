import './App.css';
import React from "react";
import {Link, navigate, Router} from "@reach/router";
import LogReg from "./views/LogReg";
import LoginForm from "./views/LoginForm";
import UserList from "./views/UserList";
import axios from "axios";
import AnimeMoviesOne from "./components/AnimeMoviesOne";
import AnimeMoviesAdd from "./components/AnimeMoviesAdd";
import AnimeMoviesEdit from "./components/AnimeMoviesEdit";
import AnimeMoviesAll from "./components/AnimeMoviesAll";
import MembersOne from "./components/MembersOne";
import MembersEdit from "./components/MembersEdit";
import MembersAll from "./components/MembersAll";
import MembersAdd from "./components/MembersAdd";

function App() {
  const logout = () => {
    axios 
      .post(
        "http://localhost:8000/api/logout",
        {},
        {
          withCredentials: true
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(console.log);
    navigate("/");
  };
  return (
    <>
      <div>
        <button onClick={logout}>Logout</button>       
        <Link to="/members">Members List</Link>
      </div>  
      <Router>
        <LogReg path="/"/>
        <UserList path="/user"/>
        <LoginForm path="/login"/> 
        <AnimeMoviesAdd path="/animeMovies/new" />
        <AnimeMoviesAll path="/animeMoviesListing" />
        <AnimeMoviesEdit path="/animeMovies/:animeMovies_id/edit" />
        <AnimeMoviesOne path="/animeMovies/:id" />
        <MembersAll path="/members"/>
        <MembersEdit path="/members/:members_id/edit"/>
        <MembersOne path="/members/:id"/>
        <MembersAdd path="/members/new"/>
      </Router>
    </>
  );
}

export default App;