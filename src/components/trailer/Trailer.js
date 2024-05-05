import {useParams} from 'react-router-dom';
// Use params hook to extract the parameter value from the URL. The paramter will have a yt ID which will open a yt video.
import ReactPlayer from 'react-player';
import './Trailer.css';

// create boiler plate code:
import React from 'react'

const Trailer = () => {

    let params = useParams();
    // This will get the passed parameters.
    const key = params.ytTrailerId;
    // Storing the params as a variable.
  return (
    <div className='react-player-container'>
        {/* Plyer will reside in this div container*/}
            {(key!=null)?<ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`} width='100%' height='100%'/>:null}
        {/* React player component.
            Also to include controls: 'control="true"
            Playing="true" to play as soon as the trailer component loads
            url= (add the key containing params/ytVidId and append the same to a url to play the video.)
        */}
    </div>
  )
}

export default Trailer