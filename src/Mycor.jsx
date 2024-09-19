import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './car.css';

const Mycor=()=>{
    const data=[
        {
            name:"Jarvis",
            image:"./nine.png",
            about:'Its a basic javascript and html css website. Here the website take soundstream as input ansd convert it into Text and then perform it.'},
        {
            name:"Pokedex",
            image:"./sev.png",
            about:"Its My first React js project . from this i learnt React. Here I used a available Api to search details about Pokemon"

           
        },
        {
            name:"Weather Today",
            image:"./five.png",
            about:"Its a basic weather website. Where you search a location(city) and the Api return you the Result of weather search like---Temperature,Weather type etc."

        },
        {
            name:"Stop watch",
            image:'./four.png',
            about:'I made this stopwatch to make a component if i need it in some other project. It has a start ,stop and reset button to start stop and reset the stop watch.'
        },
        {
            name:"Basic pokedex",
            image:"./eigh.png",
        },
        {
            name:"Drama mod",
            image:'./six.png',
            about:' Here You can search a movie and it will return the movie and similar movies'
        },
        {
            name:"Color picker",
            image:'./one.png',
            about:'User chooses color and then the button gets colored with the chosen colour'
        },
        {
            name:"Color picker",
            image:'./two.png',
            about:'User chooses color and then the button gets colored with the chosen colour'
        }

    ];
    return (
        <Carousel>
           {data.map((project,index)=>( 
   
               <div className="cont" key={index}>
                   <div className="proim">
                       <img src={project.image} alt=" "/>
                   </div>
                   <div className="det">
                       <p>{project.name}</p>
                       <p>{project.about}</p>
                   </div>
               </div>
           ))}
         
        </Carousel>
     );
   }
   
   export default Mycor;