import React from 'react'
import './Time.css'

function Time(props){
    return(
        <section className='time'>
            <h3>{props.nome}</h3>
        </section>
    )
}

export default Time