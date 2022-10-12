import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] =useState(false);

    function handleResponse(response){
        
        setResults(response.data[0]);
    }
    function search(){
// source:https://dictionaryapi.dev/
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`   ;
         axios.get(apiUrl).then(handleResponse);
        }
    function handleSubmit(event){
        event.preventDefault();
           search();
    }
    
    function storeKyeword(event){
        setKeyword(event.target.value);

    } 

    function load(){
        setLoaded(true);
        search();
    } 
      if(loaded){
    return (
    <div className="Dictionary">

       <section> 
        
        <form onSubmit={handleSubmit}>
            <input type="search" 
            onChange={storeKyeword}
            autoFocus={true}
            defaultValue= "What would you like to look up?"
            />
        </form>
        <div className="hint"> Suggestions: House, Book, Sunrise</div>
        </section>
       
        <Results results={results}/>
         </div>
    )  ;
} else{
    load();
    return "Loading";
}
}