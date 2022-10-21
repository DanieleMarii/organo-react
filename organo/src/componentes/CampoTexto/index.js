import React, { Component } from 'react';
import './CampoTexto.css'

class CampoTexto extends Component{
    render(){
        const placeholderModificada = `${this.props.placeholder}...`
    return(
        <div className='campo-texto'>
            <label>{this.props.label}</label>
            <input placeholder={placeholderModificada} />
        </div>
        
    )
}
}

export default CampoTexto