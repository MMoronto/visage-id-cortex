import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '036094c653f64485b1082194d324fd43'
});

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
    app.models.predict(
      Clarifai.COLOR_MODEL, 
      "https://samples.clarifai.com/face-det.jpg").
    then(
      function(response) {
        // do something with response
        console.log(response);
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

        
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
