import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './photo.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
      <Card>        
        <CardImg src={image.hdurl}/>
        <CardBody>
        <CardTitle>{image.title}</CardTitle>
        <CardSubtitle>{image.date}</CardSubtitle>
        <CardText>{image.explanation}</CardText>
        </CardBody>
      </Card>
    );
  }  

