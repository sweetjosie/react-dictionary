import React from "react";
import "./Photo.css";

export default function Photos(props){
if (props.photos){
    return (
        <section className="Photos">
            <div className="row">
           
           {props.photos.map(function(photo,index){
            return (
                <div className="col-4 Photos" key={index}>
                    <a href={photo.src.original} target= "_blank" rel="nonreferrer" alt="Your searched Keyword">

                         <img src= {photo.src.landscape} alt="Your searched keyword"
                className="img-fluid"/>
                    </a>
               
               
                </div>
            )
           })} 
           </div>
        </section>
    )

}else{
    return null;
}
}
//