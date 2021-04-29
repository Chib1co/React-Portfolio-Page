import React from 'react'
import "./style.css";

export default function Hero(props){
        return (
            <div className="display bg-hero" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
               {props.children}
                </div>
        )
    }

