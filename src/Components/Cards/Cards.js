import React from 'react'
import "../Cards/Cards.css"
import blur from "../../Assets/img/blur.png"

export default function Cards(props) {
    return (
        <>
            {
                <div className='cards' style={{background: `url(${props.bgImg})`}}>
                    <img className="cards-img" src={props.img} alt={props.img} />
                    <div className='cards-footer'>
                        <img src={blur} alt={"blur-img"} />
                        <p className='card-title'>{props.cardTitle}</p>
                        <p className='card-desc'>{props.cardDesc}</p>
                        <p className='card-link'>{props.link}</p>
                    </div>
                </div>
            }
        </>
    )
}
