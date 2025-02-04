import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';

//Exemplo utilizando o Styled Components
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.primary ? 'blue' : 'gray'};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 8px;
`;
//em componente já criado
function Header2({className, children}){
    return <h1 className={className}>
            {children}
        </h1>
}
const StyledHeader = styled(Header2)`
    color: #BF4F74;
    font-weight: bold;
`;

export default function App() {
  
  return(
    <div>
    {/* Exemplo usando Styled Components*/}
        <Header2>Unstyled Header</Header2> <br />
        <StyledHeader>Styled Header</StyledHeader>
        <Button >Click Me!</Button>
    
    {/* Exemplo utilizando css e css module
        <div className='App'>
        <Header />
        <NavBar />
        <h1>Compreendendo CSS no React</h1>
        <code>Aqui é um texto estilizado com fonte de código.</code>
    </div>*/}
    
    </div>
  );
}