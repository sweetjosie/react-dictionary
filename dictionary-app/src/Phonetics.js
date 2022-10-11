import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Phonetics(props){
    return (
        <div className="Phonetics">
          
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            
         <FontAwesomeIcon icon="fa-solid fa-play" />
   Listen Here 
     
            </a>
            <br/>
            {props.phonetic.text}
        </div>
    );
} 
// <FontAwesomeIcon icon="fa-solid fa-play" />