import React, {Component} from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

class Formulario extends Component{
    render(){
        const times = [
            'Programação',
            'Front-end',
            'Devops',
            'UX e design',
            'Mobile',
            'Inovação e Gestão'
        ]
        return(
            <section className='formulario'>
                <form action="">
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                    <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                    <ListaSuspensa label="Time" itens={times}/>
                </form>
            </section>
        )
    }
    
}

export default Formulario