import React, { useEffect, useState } from "react";
import "./StyleSheets/Banner.css";
import { BsPlayFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import axios from "../axios";
import requests from "../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + ".." : string;
  }
  return (
    <>
      <div
        className="banner"
        style={{
          // backgroundSize: "contain",

          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          height: "70vh",
          width: "100vw",
          backgroundSize: "cover",

          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner-contents">
          <h1 className="banner-title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <div className="banner-desc">{truncate(movie?.overview, 200)}</div>
          <div className="banner-buttons">
            <button className="play-btn">
              <BsPlayFill size={20} />
              Play
            </button>
            <button className="add-to-list-btn">
              <GoPlus size={20} />
              My List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
