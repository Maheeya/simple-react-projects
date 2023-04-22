import { useState} from "react";

export default function Tour( {id, name, info, image, price, removeTours} ){
    const [readMore, setReadMore] = useState(true)
    return(
        <div className="container" key={id}>
            <img src={image}></img>
            <p className="price">${price}</p>
            <article>
                <h3>{name}</h3>
                <p id="text" className="info">{(readMore ? info.slice(0,200): info ) + '...'}
                <button onClick={() => setReadMore(!readMore)} className="readMore">{readMore ? 'Read More': 'Show Less'}</button>
                </p>
            </article>
            <button onClick={() => removeTours(id)} className="btn">Not interested</button>
        </div>
    )
}