import React from 'react'
import Colaborador from '../Colaborador'
import './Time.css'

function Time(props){
    const corFundo = { backgroundColor: props.corSecundaria}
    const corBorda = { borderColor: props.corPrimaria}
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={corFundo}>
            <h3 style={corBorda}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>    
        </section>

        : ''
    )
}

export default Time