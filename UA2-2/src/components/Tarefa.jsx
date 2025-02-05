// UA2-2-2 - Propagação de estados utilizando UseContext - Provedor de contexto
import { useContext } from "react";

import { TarefasContext } from "../App";

export default function Tarefa( { tarefa } ) {
  
    // const [tarefas, setTarefas] = useContext(TarefasContext); //<- Mudança das variaveis com o uso do Reducer

    //UA2-2-3 - Utilização do Reducer
    const { dispatch } = useContext(TarefasContext);

    function concluirTarefa(tarefa) {
      dispatch({ type: "CONCLUIR_TAREFA", tarefa });
    }

// UA2-2-1 - Propagação de estados por lifting usando props
//export default function Tarefa( { tarefa, tarefas, setTarefas } ) {

    // function concluirTarefa(tarefa) { //<- Mudança das variaveis com o uso do Reducer
    //   const index = tarefas.findIndex(t => t.id === tarefa.id);
    //   tarefas[index].completa = true;
    //   setTarefas([...tarefas]);
    // }
  
    return (
      <div key={tarefa.id} className='Tarefa'>
        <span style={{textDecoration: tarefa.completa && 'line-through'}}>
          {tarefa.titulo}
        </span>
        {!tarefa.completa 
          && <button type='button' 
              onClick={() => concluirTarefa(tarefa)}>
                Tarefa concluída?
          </button>}
      </div>
    )
  }