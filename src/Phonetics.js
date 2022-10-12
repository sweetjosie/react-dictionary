import React from "react";
import "./Phonetics.css"



export default function Phonetics(props){
    return (
        <div className="Phonetics">
          
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
    
                Listen Here 
     
            </a>
            
         {" "}   {props.phonetic.text}
            
        </div>
    );
} 
// <FontAwesomeIcon icon="fa-solid fa-play" />