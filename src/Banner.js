import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import "./Banner.css"
const base_url="https://image.tmdb.org/t/p/original/";


function Banner() {
    const [movie,SetMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const req=await axios.get(requests.fetchNetflixOriginals);
            SetMovies(
                req.data.results[
                Math.floor(Math.random()*req.data.results.length-1)
            ]
            );
            return req;
        }
        fetchData();
    },[]);
    console.log(movie);

    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    console.log(movie);
  return (
    <header className="banner"
        style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}
    >
    <div className="banner__contents">
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
            {truncate(movie?.overview,150)}
        </h1>
    </div>
    <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner
