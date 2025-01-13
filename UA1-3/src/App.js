//renderização condicional
export default function App() {
  //elemento lista - exemplos A, B, C e D
  //const tarefa = {id: "T1", descricao: "Estudar React", concluida: false};
  //A - condicional simples
  /*
  if (tarefa.concluida) {
    return <p>Tarefa concluida: {tarefa.descricao}</p>
  } else {
    return <p>Tarefa pendente: {tarefa.descricao}</p>
  }
  */
  //B - operador ternario
  /*
  return <p>
    Tarefa {(tarefa.concluida) ? "CONCLUÍDA" : "PENDENTE"}: {tarefa.descricao}
  </p>
  */
  //C - Retornando null - vazio
  /*
  return (tarefa.concluida) ? null : <p>Tarefa pendente: {tarefa.descricao}</p>
  */
  //D - operador lógico AND ou E - && - retorna condicionalmente o operando a direita se esquerda for verdadeiro
  /*
  return tarefa.concluida && <p>Tarefa concluida: {tarefa.descricao}</p>
  */
  //elemento lista - exemplos E e F
  const tarefas = [
    { id: "T1", descricao: "Tarefa 1", finalizada: true },
    { id: "T2", descricao: "Tarefa 2", finalizada: true },
    { id: "T3", descricao: "Tarefa 3", finalizada: false},
    { id: "T4", descricao: "Tarefa 4", finalizada: true },
    ];
  //E - mapeamento (propriedade map) de objetos em objetos html - key é um parâmetro obrigatório sua não utilização causa um alerta
  /*
  return <ul>
            {tarefas.map(tarefa => <li key={tarefa.id}>{tarefa.descricao}</li>) }
        </ul>;
  */
  //F - filtrando Elementos da lista com Filter
  const tarefasPendedentes = tarefas.filter( tarefa => !tarefa.finalizada );
  return <ul>
    {tarefasPendedentes.map( tarefa => <li key={tarefa.id}>{tarefa.descricao}</li>)}
  </ul>
}
