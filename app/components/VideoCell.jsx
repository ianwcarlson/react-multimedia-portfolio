import React from 'react';
import {Col} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';

class VideoCell extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let videoSrcUrl = "//player.vimeo.com/video/" + this.props.videoId;
        return(
            <Col sm={12} md={6} lg={4}>
                <Panel>
                    <iframe
                        src={videoSrcUrl}
                        height="350px"
                        width="100%"
                        allowFullScreen>
                    </iframe>
                </Panel>
            </Col>
        );
    }
}

export default VideoCell;