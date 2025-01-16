import './App.css';
import { useState } from 'react';

export default function App() {
  
  //lista estática como entrada - estados iniciais
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', completa: false },
    { id: 2, titulo: 'Estudar Node', completa: true }
  ]);

  //Funções criadas para permitir interação com a aplicação
  function novaTarefa() {
    const input = document.querySelector('div.NovaTarefa input');
    
    if(input.value === '') return;

    const id = tarefas[tarefas.length-1].id + 1;
    const novaTarefa = { id, titulo: input.value, completa: false };
    
    setTarefas([...tarefas, novaTarefa]);//...spread operator para pegar todos elementos
    
    input.value = '';
  }

  function concluirTarefa(tarefa) {
    const index = tarefas.findIndex(t => t.id === tarefa.id);
    tarefas[index].completa = true;
    setTarefas([...tarefas]);
  }

  return (
      <div className="App">
        <header className='Cabecalho'>
          <h1>Aplicativo de Tarefas</h1>
        </header>

        <div className='NovaTarefa'>
          <input type='text' placeholder='Digite uma nova tarefa' />
          <button type='button' onClick={novaTarefa}>Nova Tarefa</button> {/*Adicionada função ao botão*/}
        </div>

        <div className='ListaTarefas'>
          <h2>Tarefas Pendentes:</h2>
          
          {/* exemplo estrutural
          <div className='Tarefa'>
            <span>Estudar React</span>
            <button type='button'>Tarefa concluída?</button>
          </div>
          <div className='Tarefa'>
            <span>Estudar Node</span>
            <button type='button'>Tarefa concluída?</button>
          </div>
          */}

          {tarefas
            .filter(tarefa =>!tarefa.completa)
            .map(tarefa => (
            <div key={tarefa.id} className='Tarefa'>
              <span>{tarefa.titulo}</span>
              <button type='button' onClick={()=>concluirTarefa(tarefa)}>Tarefa concluída?</button> {/*Adicionada função ao botão*/}
            </div>
          ))}

        </div>

        <div className='ListaTarefas'>
          <h2>Tarefas Concluídas:</h2>
          
          {/* exemplo estrutural
          <div className='Tarefa'>
            <span>Estudar React Native</span>
          </div>
          <div className='Tarefa'>
            <span>Estudar JavaScript</span>
          </div>
          */}

          {tarefas
             .filter(tarefa => tarefa.completa)
             .map(tarefa => (
               <div key={tarefa.id} className='Tarefa'>
                 <span style={{textDecoration: 'line-through'}}>
                   {tarefa.titulo}
                 </span>
               </div>
          ))}

        </div>
      </div>
  );
}
