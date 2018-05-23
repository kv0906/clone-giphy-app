import React, { Component } from 'react';

import './App.css';
import visual from './images/coca-zero.png';


class BlockImage extends Component {

    constructor (props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className="col-md-3">
                <div className="img-block">
                    <img src={visual} alt=""/>
                </div>
                <div className="user-info">
                    <img className="avatar" src="" alt=""/>
                    <p className="username">Van Tran</p>
                </div>

            </div>
        );
    }
}

export default BlockImage;
