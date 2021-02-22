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
        <h1>MERN USERS</h1>
        <button onClick={logout}>Logout</button>
      </div>  
      <Router>
        <LogReg path="/"/>
        <UserList path="/user"/>
        <LoginForm path="/login"/> 
        <AnimeMoviesAdd path="/animeMovies/new" />
        <AnimeMoviesAll path="/animeMoviesListing" />
        <AnimeMoviesEdit path="/animeMovies/:animeMovies_id/edit" />
        <AnimeMoviesOne path="/animeMovies/:id" />
      </Router>
      <div className="container">
        <Link to="/user">Get Users List</Link>
      </div>
    </>
  );
}

export default App;