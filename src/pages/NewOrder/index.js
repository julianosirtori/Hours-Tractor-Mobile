import React from 'react';
import Header from '../../components/Header';

import {
  Container, Title, Content, TextInfo,
} from './styles';

export default function NewOrder() {
  return (
    <Container>
      <Header back />
      <Content>
        <Title>Novo Serviço</Title>
        <TextInfo>Trator: Massey Ferguson</TextInfo>
        <TextInfo>Trator: Valmet</TextInfo>
      </Content>


    </Container>
  );
}
