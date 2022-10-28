import React from 'react'
import './Time.css'

function Time(props){
    const corFundo = { backgroundColor: props.corSecundaria}
    const corBorda = { borderColor: props.corPrimaria}
    return(
        
        <section className='time' style={corFundo}>
            <h3 style={corBorda}>{props.nome}</h3>
        </section>
    )
}

export default Time