import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Planta from './pages/mapa';

export type ComodoStaus = {
  sala: 'C' | 'NC',
  cozinha: 'C' | 'NC' | undefined,
  banheiro: 'C' | 'NC' | undefined,
  hall: 'C' | 'NC' | undefined,
  quarto1: 'C' | 'NC' | undefined,
  quarto2: 'C' | 'NC' | undefined,
}

function App() {

  const [comodos, setComodos] = useState({} as ComodoStaus)

  useEffect(()=>{

    setComodos({...comodos,sala:'C',cozinha:'NC'})
  },[comodos])

  return (
    <ContainerBody>
      <Planta handleComodos={comodos}  />
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

