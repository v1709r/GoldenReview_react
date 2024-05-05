import './App.css';
import api from './api/axios.config';
import {useState, useEffect} from 'react';    // What is useState & useEffect hook? What are hooks.
import Layout from "./components/Layout";
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home.js';
import Header from './components/header/Header.js';
import Trailer from './components/trailer/Trailer.js';
import Reviews from './components/reviews/Reviews.js';
import NotFound from './components/notFound/NotFound';

function App() {

  const  [movies, setMovies] = useState();
  // Rreturning a destructed array from the useState hook.
  // first item returned in the destructured array is movie data returned from a call to the relevant api endpoint.
  //Second item is a funcion used to change the state of the movieVariables, when the state of variable tracked by react through the use state hook is changed, thus in this case the app will be rerendered when the state of the movies changes.

  // {**9}
  const [movie, setMovie] = useState();   // for single movie, destructured array and different method.

  // {**10}
  const [reviews, setReviews] = useState([]);

  // Creating a funciton handling hhtp get request to an endpoint that will retun an array of movie data.
  // Once, we get the array of movie data, this code that changes the state of the movies arays is executed.
  const getMovies = async() => {
    // Wraopping in try catch block to be through with the err presented by the http status code
    try {
        const response = await api.get("/api/v1/movies")
        // path info is passed here to the get method, will be added to the base url of axios.
        // Async is used to manage asynchronous thread management on the client {in our app}.
        // Like anroid, it {and promises} ensures that the ui is not blocked when long running process like api call are processed. The next line is executed.

        //console.log(response.data);
      // code to log the results returned from the call to the relevant end point to the browser console window.

        setMovies(response.data);
    }catch(err) {
      console.log(err);
    }
  }
  // {**8}
  const getMovieData = async (movieId) => {
    try{
        const response = await api.get(`/api/v1/movies/${movieId}`);
        // An imdb value is to be passed here, (to the movieId parameter) and the http {using movie.id.value} get request for the movie will be made in the url for single movie. Same has to happen like in backend, BaseUrl+movieId
        
        // {**9}
        const singleMovie = response.data;
        // setting the state for the movie variable
        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        // To make code clearer extracting reviwes array from the movie data and track the state of review array.

    }catch(err){
        console.log(err);
    }
}
  useEffect(() => {
    getMovies();
  }, [] )
  // implementing the use effect hook so that the getMovies function is execuetd when the app component first loads.

  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Layout/>}>
      {/* This is a parent route element because child route elements will be include within this. Like a child route component pointing to the home componenet. Will add the child route elements as developement proceeds*/}
        <Route path="/" element={<Home movies={movies}/>}> </Route>
        <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        {/* Informing React-Router-dom about the Yt video ID parameter that the trailer component needs to access*/}
        {/* Add a play button in the carousel post adding the trailer component. The carousel is contained in the hero.js thus, the button is added in the same. */}
        <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
        {/* Here making sure to pass correct props from the reviews component?? */}
        <Route path="*" element = {<NotFound/>}></Route>
      </Route>
    </Routes>

    </div>
  );
}

export default App;