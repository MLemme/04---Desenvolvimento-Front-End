import React, { Component } from 'react'

export default class BotaoClasse extends Component {
    constructor(props){
        super(props);
        this.state = {contador: 0};
    }
    //Arrow fucntion
    incrementa = () => {
        this.setState({contador: this.state.contador + 1});
    }
    
    render() {
    return (
      //<div>BotaoClasse</div>
      //<button type='button' onClick={() => console.log('Clicou Classe')}> 
      //{/*Clique(Classe)*/ this.props.nome}
      //</button>
      //utilizando a função que incrementa o estado criado
      <button type='button' onClick={this.incrementa}> 
      Cliques Classe: {this.state.contador}
      </button>
    )
  }
}
