import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import {ClarifaiStub, grpc} from 'clarifai-nodejs-grpc';
import stub from 'ClarifaiStub.grpc()';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key {036094c653f64485b1082194d324fd43}");

// const app = new Clarifai.App({
//   apiKey: '036094c653f64485b1082194d324fd43'
// });

const particlesOptions = {
  particles: {
    number: {
      value: 30,
        density: {
          enable: true,
          value_area: 800 
        }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    metadata.models.predict("036094c653f64485b1082194d324fd43", "https://en.wikipedia.org/wiki/Ibrahim_Babangida#/media/File:General_Ibrahim_B._Babangida_GCFR.jpg").then(
      function(response) {
        // do something with response
      },
      function(err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
{/*        <Particles className='particles'
          params={particlesOptions}
        />*/}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm  
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} 
        /> 

        {/*
              <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
