import React from 'react';
import './App.css';
import axios from 'axios'; 
import {Photo} from './components/Photo';

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

function App() {
  return (
    <Photo/>
  );
}



export default App;
