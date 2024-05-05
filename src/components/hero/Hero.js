import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import Reviews from '../reviews/Reviews';
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {
    
    const navigate = useNavigate();
    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`)
    }

  return (
    <div className='movie-carousel-container'>
        <Carousel>
            {
                movies?.map((movie) =>{
                    // The ?. syntax is called the optional chaining operator. It ensures that if movies is null or undefined, the mapping won’t throw an error. Instead, it will return undefined.
                    return(
                        <Paper>
                            <div className='movie-card-container'>
                                <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
{/* {***3}
Idea is to display the movie poster infront of the backdrops we have in a smaller size for an effect. Both the background will change images and poster will change accordingly.
To do the same:
Within that inline style we assign a variable to the property that needs to be referenced. {Here, custom css variable is named as --img}.
Setting the image url in the variable (--img) as URL from the backdrops array element of each movie in the movies(variable) array.
Choosing to reference the first backdrops image path in the backdrops in the backdrops array returned from the server. (Can rotate them later).
Each backdrop points to an image that is to be displayed as a background image appropriately for each movie item in the carousel.
Such is done in the CSS class. {check {**4}}

This contains a container (div) that has details of the movies (div's of poster ad title)
*/}
                                    <div className='movie-detail'>
                                        <div className='movie-poster'>
                                            <img src={movie.poster} alt='' />
                                        </div>
                                        <div className='movie-title'>
                                            <h4>
                                                {movie.title}
                                            </h4>
                                        </div>
                                        <div className='movie-buttons-container'>
                                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            {/* The trailerLink property retrieved from the server contains the entier url to yt video, but only id is required thus, extracting it by javascript substring method to get last 11 digits of the link*/}
                                            {/* Also, import Link from react-router-dom*/}
                                                <div class="play-button-icon-container">
                                                    <FontAwesomeIcon
                                                        className="play-button-icon"
                                                        icon = {faCirclePlay}
                                                    />
                                                </div>
                                            </Link>
                                            <div className='movie-review-button-container'>
                                                <Button variant="info" onClick={() => reviews(movie.imdbId)}> Reviews</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero