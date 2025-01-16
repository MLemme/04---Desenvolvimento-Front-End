import BotaoClasse from "./components/BotaoClasse";
import BotaoFuncao from "./components/BotaoFuncao";
import CabecalhoClasse from "./components/CabecalhoClasse";
import CabecalhoFuncao from "./components/CabecalhoFuncao";
//import Cabecalho from "./components/Cabecalho";

export default function App() {
  //componentes reacts
  //return <p>
  //  <Cabecalho />    
  //</p>
  //criação de novos componentes
  return <div>
    {/*<h1>App React</h1>*/}
    {/*<BotaoClasse nome='Botão Classe'/>*/}
    <BotaoClasse />
    {/*<BotaoFuncao nome='Botão Função'/>*/}
    <BotaoFuncao />
    <CabecalhoFuncao>
      <p>Parágrafo (Filho 1)</p>
      <p>Parágrafo (Filho 2)</p>
    </CabecalhoFuncao>
    <CabecalhoClasse>
      <p>Parágrafo (Filho 1c)</p>
      <p>Parágrafo (Filho 2c)</p>
    </CabecalhoClasse>
  </div>
}
