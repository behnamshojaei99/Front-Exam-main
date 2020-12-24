import React from "react"
import './Title.css'



const Title=(props)=>{
    return (
              <div className="title">
                    <h1 class="heading-2">{props.name}</h1>
                    <div class="divider-2"><span></span></div>
               </div>
    );           




};


export default Title