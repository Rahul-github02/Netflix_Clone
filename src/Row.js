/*rfce-->a small snippet as we always wants to export them and 
to use them in a different file*/

import React,{useState,useEffect} from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
const base_url="https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, flag }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
    //   console.log(request);
      setMovies(request.data.results);
      return request;
    }
    // console.table(movies);
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=18313f2a0d6e010cccfe3b9dd413d53d`
      );
    //   console.log(trailerurl);
      setTrailerUrl(trailerurl.data.results[0]?.key);
    //   console.log(trailerUrl);
    }
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path !== null && (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${flag && "row__posterLarge"}`}
                src={`${base_url}${
                  flag ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
