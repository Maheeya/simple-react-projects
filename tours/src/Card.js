import React from "react";
import Tour from './Tour'

export default function Card ({tours, removeTours}) {

    return(
    <>
    {tours.map((tour) => {
        const {id, name, info, image, price} = tour
        return(
            <Tour key={id} id={id} name={name} info={info} image={image} price={price} removeTours={removeTours}/>
        )
    })}
    </>
)
}