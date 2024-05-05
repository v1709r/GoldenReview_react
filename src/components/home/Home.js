import Hero from '../hero/Hero'

const Home = ({movies}) => {
  return (
    // <div>
    //     Welcome!!!
    // </div>
    // // Checking the route functionality by adding a random text here.
    <Hero movies={movies} />
  )
  // This is the part of the code that is returned as the jsx component from the Home.js
}

export default Home