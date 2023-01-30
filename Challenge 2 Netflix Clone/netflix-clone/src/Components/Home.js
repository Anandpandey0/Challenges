import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";
import "./StyleSheets/Home.css";
import requests from "../requests";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Row
        fetchUrl={requests.fetchNetflixOriginals}
        title="Netflix Originals"
        isLarge
      />
      <Row fetchUrl={requests.fetchTrending} title="Trending Now" />
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated" />
      <Row fetchUrl={requests.fetchActionMovies} title="Action" />
      <Row fetchUrl={requests.fetchComedyMovies} title="Comedy" />
      <Row fetchUrl={requests.fetchHorrorMovies} title="Horror" />
      <Row fetchUrl={requests.fetchRomanceMovies} title="Romance" />
      <Row fetchUrl={requests.fetchDocumentaries} title="Comedy" />
    </div>
  );
};

export default Home;
