import React from 'react';
import styled from 'styled-components';
import Formulario from './pages';


function App() {
  return (
    <ContainerBody>
      <Formulario />
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

