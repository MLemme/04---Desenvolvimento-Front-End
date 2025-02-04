import Tarefa from "./Tarefa";

{/* ...props é um spred oparator que pega as propriedades restantes no caso tarefas e setTarefas */}

export default function ListaTarefas({titulo, tarefasFiltradas, ...props}){
    return(
        <div className="ListaTarefas">
            <h2>{titulo}</h2>
            {tarefasFiltradas.map((tarefa) => (
                <Tarefa key={tarefa.id} tarefa={tarefa} {...props}/>
            ))}
        </div>
    )
}
