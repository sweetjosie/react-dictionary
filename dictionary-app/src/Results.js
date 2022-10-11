import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js"
import "./Results.css";



export default function Results(props){
    if (props.results){

        return ( 
        <div className="Results">
            <section> 
                 <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function(phonetic, index){
                return (
                    <div key={index}>
                        <Phonetics phonetic = {phonetic}/>
                        </div>
                );
            })}
             </section>
           

            {props.results.meanings.map(function(meaning,index){
                return (
                    <section key= {index}>
                        <Meaning meaning={meaning}/>
                    </section>
                ) //meaning.definitions[0].definition;
            
            })}
        </div>)
    }else {
        return null ;
    }

}