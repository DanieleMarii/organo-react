import React, { Component } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Formulario />
      </div>
    );
  }
}

export default App;
