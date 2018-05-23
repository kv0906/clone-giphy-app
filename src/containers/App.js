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
            gifs: []
        }
    }

    componentDidMount() {
        axios.get(`http://api.giphy.com/v1/gifs/trending?&api_key=MsBDqHxbtScxCgSgupdEIKOLG9YHMCSb&limit=20`)
            .then(res => {
                const data = res.data;
                this.setState({
                    gifs: data.data
                })
                console.log(this.state.gifs[0].images.original.url)
            })
    }

  render() {
    return (
      <div className="App">
          <div className="heading">
              <h1>Clone giphy app</h1>
              <img className="icon" src={icon} alt=""/>
          </div>
          <div className="wrapper container-fluid">
              <div className="row">
                  { this.state.gifs.map(gif =>
                      <BlockImage
                          key={gif.id}
                          imageLink={gif.images.original.url}
                          username={gif.username}
                          avatarLink={gif.user.avatar_url}
                      />
                  )}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
