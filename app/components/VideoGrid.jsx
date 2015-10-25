import React from 'react';
import {Row} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import VideoCell from './VideoCell.jsx';

class VideoGrid  extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Grid fluid={false}>
                <VideoCell videoId='128206143'/>
                <VideoCell videoId='75579957'/>
                <VideoCell videoId='61325801'/>
            </Grid>
        );
    }
}

export default VideoGrid;