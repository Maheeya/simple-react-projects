import React from "react";
import { useState } from "react";

export default function Card ({tours, removeTours}) {
    const [displayBtn, setDisplay] = useState('Read More')
    const [readMore, setReadMore] = useState(true)


    function toggleReadMore(){
        if (readMore){
            setDisplay('Show less')
            setReadMore(false)
        } else{
            setDisplay('Read More')
            setReadMore(true)
        }
    }



    return(
    <>
    {tours.map((tour) => {
        const {id, name, info, image, price} = tour
        return(
            <div className="container" key={id}>
                <img src={image}></img>
                <div>${price}</div>
                <article>
                    <h3>{name}</h3>
                    <p id="text">{readMore ? info.slice(0,200): info}</p>
                    <button onClick={toggleReadMore}>{displayBtn}</button>
                </article>
                <button onClick={() => removeTours(id)}>Not interested</button>
            </div>
        )
    })}
    </>
)
}