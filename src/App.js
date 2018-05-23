import React, { Component } from 'react';
import axios from 'axios';

import BlockImage from '../src/BlockImage'

import './App.css';

class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        axios.get(`http://api.giphy.com/v1/gifs/trending?&api_key=MsBDqHxbtScxCgSgupdEIKOLG9YHMCSb&limit=5`)
            .then(res => {
                const data = res.data;
                this.setState({
                    gifs: data.data
                })
                console.log(this.state.gifs)
            })



    }

  render() {
    return (
      <div className="App">
          <div className="wrapper container-fluid">
              <div className="row">
                  <BlockImage/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
