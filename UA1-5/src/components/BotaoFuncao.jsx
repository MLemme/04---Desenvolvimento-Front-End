import { useState } from "react"

//proriedades passadas para um componente - props
export default function BotaoFuncao(props) {
    const [contador, setContador] = useState(0)

    function incrementa(){
        setContador(contador + 1);
    }

  return (
    //<div>BotaoFuncao</div>
    //<button type='button' onClick={() => console.log('Clicou Função')}> 
    //{/*Clique(Função) deixa de ser texo para ser propriedade =>*/ props.nome}
    //</button>
    <button type='button' onClick={incrementa}> 
    Cliques Função: {contador}
    </button>
  )
}
