import React, { Component } from 'react';
import axios from 'axios';

import BlockImage from '../components/BlockImage'

import './App.css';
//assets

import icon from '../images/giphy-icon.jpg';

class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            defaultCount: 20,
            count: 20,
            gifs: []
        }
    }

    componentDidMount() {
        axios.get(`http://api.giphy.com/v1/gifs/trending?&api_key=MsBDqHxbtScxCgSgupdEIKOLG9YHMCSb`)
            .then(res => {
                const data = res.data;
                this.setState({
                    gifs: data.data
                })
            })
    }

  //  Load more gifs

    onLoadMore() {
        let count = this.state.defaultCount;
        count = count + this.state.count;
        this.setState({ count });
    }
    render() {
        const { gifs, itemCount} = this.state;
        const count = this.state.count;
        const showData = (item, index) => {
            return ((index < count) ? <BlockImage
                key={item.id}
                imageLink={item.images.original.url}
                username={item.username}
                avatarLink={item.user.avatar_url}
            /> : '');
        };
        return (
            <div className="App">
                <div className="heading">
                    <h1>Clone giphy app</h1>
                    <img className="icon" src={icon} alt=""/>
                </div>
                <div className="wrapper container-fluid">
                    <div className="row">
                        {gifs.map(showData)}
                    </div>
                    <div onClick={this.onLoadMore.bind(this)} className="loadMore">Load More</div>
                </div>
            </div>
        );
    }
}

export default App;
