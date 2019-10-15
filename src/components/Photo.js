import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './photo.css';

const apiKey = 'GdL3GNLzoNuuGwuaWXjW9AiFH4qvQWWFpQFaacQb';


export const Photo = props => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(response => {
        const nasaInfo = response.data;
        console.log(nasaInfo);
        setImage(nasaInfo);
      })
      .catch(error => {
        console.log(error); 
      });
  }, []);
    return (
      <div>
        <h1>{image.title}</h1>
        <img className="nasaImage" src={image.hdurl}/>
        <p>{image.explanation}</p>
      </div>
    );
  }  

