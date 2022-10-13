import React from "react";
import Synonyms from "./Synonyms.js"
import"./Meaning.css";

export default function Meaning(props){
    return (
        <div className="Meaning font-link">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition,index){
                return (
                    <div key={index}>  
                     <div className="Definitions">{definition.definition}</div>
                         
                        
                      <div className="Examples"> {definition.example} </div>  
                  
                    
                    
                    <Synonyms synonyms = {definition.synonyms}/>
                     
                  </div>           )
            })}

       
         
        </div>
        
    );

}//<p>{props.meaning.definitions[0].definition}</p>
//<p>{props.meaning.definitions[0].example}</p>