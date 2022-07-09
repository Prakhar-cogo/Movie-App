import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movieslist from "./movieslist";
function Homepage() {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState("");
	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=harry potter&apikey=5167a302`;
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
	useEffect(() => {
		getMovieRequest();
	}, [search]);
	let  handleClick = async () => { 
		var ss = document.getElementById('search').value;
		setSearch(ss);
		const url = `http://www.omdbapi.com/?s=${ss}&apikey=5167a302`
		const response = await fetch(url);
		const responseJson = await response.json();
		
		if (responseJson.Search) {
			setMovies(responseJson.Search);
			console.log(movies)
		}
		else{
			console.log("can't search empty text")
		}
		document.getElementById('search').value='';
	}
	return (
		<>
			<nav className="navbar fixed-top bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Movies Desk</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2"    type="text" id="search" placeholder="Search" aria-label="Search" />
                        <button type="button" className="btn btn-outline-success" onClick={handleClick}>
                            Search
                        </button>
                    </form>
                </div>
            </nav> 
			<div className="main">
			<Movieslist movies={movies} />
			</div>
		</>
	);
}
export default Homepage;