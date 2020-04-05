import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Client from '../../components/Client';
import {
  Container, Title, Clients, BtnAddClient,
} from './styles';

const clients = [1, 2, 3, 4, 5];

export default function ChooseClient() {
  const navigation = useNavigation();

  function selectedClient() {
    navigation.navigate('NewOrder');
  }

  return (
    <Container>
      <Header back />
      <Title>Escolha o Cliente</Title>
      <Clients>
        { clients.map((item) => (
          <Client
            key={String(item)}
            onPress={selectedClient}
          />
        )) }
      </Clients>
      <BtnAddClient>
        Cadastrar Cliente
      </BtnAddClient>
    </Container>
  );
}
