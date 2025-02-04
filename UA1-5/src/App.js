import './App.css';
import { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';

export default function App() {
  
  //lista estática como entrada - estados iniciais
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', completa: false },
    { id: 2, titulo: 'Estudar Node', completa: false },
    { id: 3, titulo: 'Estudar React Native', completa: true},
    { id: 4, titulo: 'Estudar JavaScript',completa: true}
  ]);

  //Funções criadas para permitir interação com a aplicação
  {/* Passou para o novo componente NovaTarefa
  function novaTarefa() {
    const input = document.querySelector('div.NovaTarefa input');
    
    if(input.value === '') return;

    const id = tarefas[tarefas.length-1].id + 1;
    const novaTarefa = { id, titulo: input.value, completa: false };
    
    setTarefas([...tarefas, novaTarefa]);//...spread operator para pegar todos elementos
    
    input.value = '';
  }
  */}
{/* Passou para o novo componente Tarefa
  function concluirTarefa(tarefa) {
    const index = tarefas.findIndex(t => t.id === tarefa.id);
    tarefas[index].completa = true;
    setTarefas([...tarefas]);
  }
*/}
  return (
      <div className="App">
        {/* passou para um modulo independente
        <header className='Cabecalho'>
          <h1>Aplicativo de Tarefas</h1>
        </header>
        */}
        <Cabecalho />
        {/* passou para um modulo independente
        <div className='NovaTarefa'>
          <input type='text' placeholder='Digite uma nova tarefa' />
          <button type='button' onClick={novaTarefa}>Nova Tarefa</button> {//Adicionada função ao botão}
        </div>
        */}
        <NovaTarefa tarefas={tarefas} setTarefas={setTarefas} /> {/*Estado é propragado através das propriedades - lifting*/}
        
        <ListaTarefas
          titulo="Tarefas Pendentes:"
          tarefasFiltradas={tarefas.filter((t)=>!t.completa)}
          tarefas={tarefas}
          setTarefas={setTarefas}
        />

        <ListaTarefas
          titulo="Tarefas Concluídas:"
          tarefasFiltradas={tarefas.filter((t)=>t.completa)}
          tarefas={tarefas}
          setTarefas={setTarefas}
        />
        {/* passou para um modulo independente
        <div className='ListaTarefas'>
          <h2>Tarefas Pendentes:</h2>
        */}

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
          {/* passou para um modulo independente
          {tarefas
            .filter(tarefa =>!tarefa.completa)
            .map(tarefa => (
            <div key={tarefa.id} className='Tarefa'>
              <span>{tarefa.titulo}</span>*/}
            {/*   <button type='button' onClick={()=>concluirTarefa(tarefa)}>Tarefa concluída?</button> */}{/*Adicionada função ao botão*/}
             {/*</div>
          ))}

        </div>
        */}
        {/* passou para um modulo independente
        <div className='ListaTarefas'>
          <h2>Tarefas Concluídas:</h2>
        */}
          {/* exemplo estrutural
          <div className='Tarefa'>
            <span>Estudar React Native</span>
          </div>
          <div className='Tarefa'>
            <span>Estudar JavaScript</span>
          </div>
          */}
        {/* passou para um modulo independente
          {tarefas
             .filter(tarefa => tarefa.completa)
             .map(tarefa => (
               <div key={tarefa.id} className='Tarefa'>
                 <span style={{textDecoration: 'line-through'}}>
                   {tarefa.titulo}
                 </span>
               </div>
          ))}

        </div>*/}
      </div>
  );
}
