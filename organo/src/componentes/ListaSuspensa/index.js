import React, {Component} from 'react';
import './ListaSuspensa.css'

class ListaSuspensa extends Component {
    render(){
        return(
            <div className='lista-suspensa'>
                <label>{this.props.label}</label>
                <select>
                    {this.props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
            </div>
        )
    }
}

export default ListaSuspensa