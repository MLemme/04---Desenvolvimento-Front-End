import React from 'react'

export default function NovaTarefa({tarefas, setTarefas}) {
    function novaTarefa() {
        const input = document.querySelector('div.NovaTarefa input');
        
        if(input.value === '') return;
    
        const id = tarefas[tarefas.length-1].id + 1;
        const novaTarefa = { id, titulo: input.value, completa: false };
        
        setTarefas([...tarefas, novaTarefa]);//...spread operator para pegar todos elementos
        
        input.value = '';
    }

    return (
            <div className='NovaTarefa'>
                <input type='text' placeholder='Digite uma nova tarefa' />
                <button type='button' onClick={novaTarefa}>Nova Tarefa</button>
            </div>
    )
}
