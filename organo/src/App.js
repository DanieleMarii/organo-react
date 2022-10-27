import React, { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App(){
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdd = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
    return (
      <div className="App">
        <Banner />
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)} />
      </div>
    );
}

export default App;
