import React from "react";

export default function List({ people }){

    return(
        <>
        {people.map((person)=>{
            const {id, name, age } = person
            return(
                <div key={person.id} className="person">
                    <img src={require("./icon3.png")}></img>
                    <div className="info">
                        <h4>{person.name}</h4>
                        <p>{person.age}</p>
                    </div>
                </div>
            )
        })}
        </>
    )
}
