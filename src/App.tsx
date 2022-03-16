import React from 'react';
import styled from 'styled-components';

import Input from './component/input';
import Botao from './component/botao'

function App() {
  return (
    <ContainerBody>
      <Input placeholder='nome'/>
      <Input placeholder='sobrenome'/>
      <Input type='email' placeholder='email'/>
      <Input/>
      <Botao cor='blue'>OK</Botao>
      <Botao cor='red'>Cancel</Botao>
    </ContainerBody>
  );
};

export default App;

const ContainerBody = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
width: 100%;
margin-top: 100px;

`;

