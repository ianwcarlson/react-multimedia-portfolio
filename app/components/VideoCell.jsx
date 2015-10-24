import React from 'react';
import ReactBootstrapGrid from 'react-bootstrap-grid';

class VideoCell extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let videoSrcUrl = "//player.vimeo.com/video/" + this.props.videoId;
        return(
            <Column medium={4}>
                <iframe
                    src={videoSrcUrl}
                    width="WIDTH"
                    height="HEIGHT"
                    frameborder="0"
                    allowFullScreen>
                </iframe>
            </Column>
        )
    }
}

export default VideoCell;