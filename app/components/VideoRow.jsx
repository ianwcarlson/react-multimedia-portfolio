import React from 'react';
import ReactBootstrapGrid from 'react-bootstrap-grid';
import VideoCell from './VideoCell.jsx';

class VideoRow  extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Row>
                <VideoCell videoId='128206143'/>
                <VideoCell videoId='75579957'/>
                <VideoCell videoId='61325801'/>
            </Row>
        )
    }
}

export default VideoRow;