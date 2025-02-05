// UA2-2-2 - Propagação de estados utilizando UseContext - Provedor de contexto
import { useContext } from "react";

import { TarefasContext } from "../App";

export default function NovaTarefa() {
    //const [tarefas, setTarefas] = useContext(TarefasContext); // UA2-2-2 Moved useContext here //<- Mudança das variaveis com o uso do Reducer
    const { dispatch } = useContext(TarefasContext); //UA2-2-3 - Utilização do Reducer

// UA2-2-1 - Propagação de estados por lifting usando props
//export default function NovaTarefa({ tarefas, setTarefas }) {

//UA2-2-2 - Propagação de estados utilizando useState
    // function novaTarefa() {
    //   const input = document.querySelector('div.NovaTarefa input');
    //   if(input.value === '') return;
    //   const id = tarefas[tarefas.length-1].id + 1;
    //   const novaTarefa = { id, titulo: input.value, completa: false };
    //   setTarefas([...tarefas, novaTarefa]);
    //   input.value = '';
    // }

//UA2-2-3 - Utilização do Reducer 
    function novaTarefa() {
        const input = document.querySelector('div.NovaTarefa input');
        if(input.value === '') return;
        dispatch({type: "NOVA_TAREFA", value: input.value });
        input.value = '';
      }
  
    return (
      <div className='NovaTarefa'>
        <input type='text' placeholder='Digite uma nova tarefa' />
        <button type='button' onClick={novaTarefa}>Nova Tarefa</button>
      </div>
    )
  }