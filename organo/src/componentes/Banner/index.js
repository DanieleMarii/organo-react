import React, { Component } from 'react';
import './Banner.css'

class Banner extends Component {
    render(){
    // jsx 
    return(
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner principal da página do organo"/>
        </header>
        
    );
    }
}

export default Banner;