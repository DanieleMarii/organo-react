import React, { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App(){
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdd = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
    return (
      <div className="App">
        <Banner />
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)} />
        <Time nome="Programação"/>
        <Time nome="Front-end"/>
      </div>
    );
}

export default App;
