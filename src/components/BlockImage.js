import React, { Component } from 'react';

import '../containers/App.css';
import './BlockImage.css'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


class BlockImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    render() {

        const { imageLink, avatarLink, username } = this.props;
        const { isOpen } = this.state;

        return (
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="img-block">
                    <img src={imageLink} alt="" onClick={() => this.setState({ isOpen: true })}/>
                    {isOpen && (
                        <Lightbox
                            mainSrc={imageLink}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    )}
                </div>
                <div className="user-info">
                    <img className="avatar" src={avatarLink} alt=""/>
                    <p className="username">{username}</p>
                </div>

            </div>
        );
    }
}

export default BlockImage;
