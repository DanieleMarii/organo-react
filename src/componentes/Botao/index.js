import React from 'react';
import './Botao.css'

function Botao(props){
    return(
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao