import React from "react";
import './Colaborador.css'

function Colaborador({nome, imagem, cargo, corFundo}){
    return(
        <div className="colaborador"> 
            <div className="cabecalho" style={{backgroundColor: corFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador