import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";


export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] =useState(false);
    let [photos,setPhotos]= useState (null);

    function handleResponse(response){
        
        setResults(response.data[0]);
    }
    function pexelsResponse(response){
        
        setPhotos(response.data.photos);
    }
    function search(){
// source:https://dictionaryapi.dev/
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`   ;
         axios.get(apiUrl).then(handleResponse);

         let pexelsApiKey = "563492ad6f9170000100000163e118514af44332ac54ecf4d35135b2";
         let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
         let headers = {Authorization: `Bearer ${pexelsApiKey}`};

         axios.get(pexelsApiUrl,{headers: headers}).then(pexelsResponse);

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
        <Photos photos={photos}/>
         </div>
    )  ;
} else{
    load();
    return "Loading";
}
}