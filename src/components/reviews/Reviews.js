// {*1}
import {useEffect, useRef} from 'react';
import api from '../../api/axios.config';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

// {*2}
import React from 'react'

// {*3}
const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

// {*4}
    const revText = useRef();
    // Using the useRef hook to reference the text area control within the review form. 
    let params = useParams();
    // Using the params Hook to extract the movieId parameter value from url. 
    const movieId = params.movieId;
    // movieId is the imdb id that is retrieved from the api call that is used to get array of movie data from the server
  
    // {*5}
    useEffect(() =>{
        getMovieData(movieId);
    },[])
    // Calling a method that is passed in as a prop to our component to retrieve the data for the required movie, using the useEffect hook for the same.

    

    // {*6}
    const addReview = async (e) => {
        e.preventDefault();

        const rev  =  revText.current;

        try{
            const response = await api.post("api/v1/reviews", {reviewBody:rev.value, imdbId:movieId});
            // Post functionality above.

            const updateReview = [...reviews,{body:rev.value}];
            // Wrting to update the state of the reviews arrayon the client side optimistically. Meaning the the data returned from the server is not used for updating the state of the reviewsArray. We are updating the arrat directly on the client

            rev.value = "";
            //Adding to automatically be blank after pressing send button.

            // {**7} and {**8} is in app,js as it has the instance of axios and we want to put a data.
            setReviews(updateReview);
            // We are updating the state of the reviews array on the client through the use of setReviews() method that will be passed as a prop from the app component.

        } catch(e) {
            console.log(e);
        }
    }
    //Creating method addReview() that will handle the http request funcitonality  

        // {*7}
    return (
    <Container>
        <Row>
            <Col>
                <h3>Reviews</h3>
            </Col>
        </Row>
        <Row class="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} lableText="Write a review?"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr/>
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>      
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>   
    </Container>
)
    // Using react components of row and col to create appropriate layout for the reviews component, with displaying th movie poster on the left and the review on the right part of the screen, done by row and col components
}

export default Reviews