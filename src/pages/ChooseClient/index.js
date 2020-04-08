import React, { useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import db from '../../data';
import Header from '../../components/Header';
import Client from '../../components/Client';
import {
  Container, Title, Clients, BtnAddClient,
} from './styles';


export default function ChooseClient() {
  const [clients, setClients] = useState([]);
  const navigation = useNavigation();

  function loadClients() {
    db.transaction((tx) => {
      tx.executeSql(
        'select * from clients;',
        [],
        (_, { rows: { _array } }) => setClients(_array),
      );
    });
  }

  useFocusEffect(() => {
    loadClients();
  });


  function selectedClient() {
    navigation.navigate('NewOrder');
  }

  function navigateToNewClient() {
    navigation.navigate('NewClient');
  }

  return (
    <Container>
      <Header back />
      <Title>Escolha o Cliente</Title>
      <Clients>
        { clients.map((item) => (
          <Client
            key={String(item.id)}
            deleteCallBack={loadClients}
            client={item}
            onPress={selectedClient}
          />
        )) }
      </Clients>
      <BtnAddClient onPress={navigateToNewClient}>
        Cadastrar Cliente
      </BtnAddClient>
    </Container>
  );
}
