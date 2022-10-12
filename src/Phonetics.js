import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Phonetics.css"



export default function Phonetics(props){
    return (
        <div className="Phonetics">
          
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            
         <FontAwesomeIcon icon="fa-solid fa-play" />
   Listen Here 
     
            </a>
            <br/>
            <div className="pronouciation">{props.phonetic.text}</div>
            
        </div>
    );
} 
// <FontAwesomeIcon icon="fa-solid fa-play" />