//import { useState } from 'react'; // <- UA2-2-3 - Não é necessário a partir da utilização do useReducer
import { useReducer } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';

// UA2-2-2 - Propagação de estados utilizando UseContext - Provedor de contexto
import { createContext } from 'react';

export const TarefasContext = createContext(null);

// UA2-2-3 - Função Reducer
function tarefasReducer(tarefas, action) {
  switch (action.type) {
    case "NOVA_TAREFA":
      const id = tarefas[tarefas.length-1].id + 1;
      const novaTarefa = { id, titulo: action.value, completa: false };
      return [...tarefas, novaTarefa];
    case "CONCLUIR_TAREFA":
      const index = tarefas.findIndex(t => t.id === action.tarefa.id);
      tarefas[index].completa = true;
      return [...tarefas];
    default:
      return tarefas;
  }
}


export default function App() {
  
  // UA2-2-1 - Propagação de estados por lifting usando props
  // const [tarefas, setTarefas] = useState([
  //   { id: 1, titulo: 'Estudar React', completa: false },
  //   { id: 2, titulo: 'Estudar Node', completa: true }
  // ]);

  // UA2-2-3 - Utilização do Reducer
  const [tarefas, dispatch] = useReducer(tarefasReducer, [
    { id: 1, titulo: 'Estudar React', completa: false },
    { id: 2, titulo: 'Estudar Node', completa: true }
  ]);

  return (
    <div className="App">
      {/* UA2-2-1 - Propagação de estados por lifting usando props
      <Cabecalho />
      <NovaTarefa tarefas={tarefas} setTarefas={setTarefas} />
      <ListaTarefas titulo="Tarefas Pendentes:" 
          tarefasFiltradas={tarefas.filter(t => !t.completa)}
          tarefas={tarefas} setTarefas={setTarefas} />
      <ListaTarefas titulo="Tarefas Concluídas:" 
          tarefasFiltradas={tarefas.filter(t => t.completa)}
          tarefas={tarefas} setTarefas={setTarefas} /> 
      */}

      {/* UA2-2-2 - Propagação de estados utilizando UseContext - Provedor de contexto*/}
      {/* <TarefasContext.Provider value={[ tarefas, setTarefas ]}> */}
      <TarefasContext.Provider value={{ dispatch }}> {/* UA2-2-3 - Utilização do Reducer */}
        <Cabecalho />
        <NovaTarefa />
        <ListaTarefas titulo="Tarefas Pendentes:" 
            tarefasFiltradas={tarefas.filter(t => !t.completa)} />
        <ListaTarefas titulo="Tarefas Concluídas:" 
            tarefasFiltradas={tarefas.filter(t => t.completa)} />
      </TarefasContext.Provider>
    </div>
  );
}