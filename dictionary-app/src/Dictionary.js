import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("")
    let [results, setResults] = useState({});

    function handleResponse(response){
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
           
        // source:https://dictionaryapi.dev/
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`   ;
         axios.get(apiUrl).then(handleResponse);
        }
    
    function storeKyeword(event){
        setKeyword(event.target.value);

    }    
   
    return (
    <div className="Dictionary">

       
        <form onSubmit={search}>
            <input type="search" 
            onChange={storeKyeword}
            autoFocus={true}/>
        </form>
        <Results results={results}/>
         </div>
    )  ;
}