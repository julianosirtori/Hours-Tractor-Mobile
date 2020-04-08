import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import db from '../../data';
import Header from '../../components/Header';
import {
  Container, Title, KeyboardAvoidingContainer, ScrollContainer, InputStyled, ButtonStyled,
} from './styles';

export default function NewClient() {
  const [name, setName] = useState('');
  const [addess, setAddess] = useState('');
  const [contact, setContact] = useState('');

  const navigation = useNavigation();

  const addessRef = useRef();
  const contactRef = useRef();

  function submit() {
    db.transaction(
      (tx) => {
        tx.executeSql('insert into clients (name, address, contact) values (?, ?, ?)', [name, addess, contact], () => {
          Alert.alert(
            'Atenção',
            'Cliente Cadastrado com sucesso',
            [
              { text: 'OK', onPress: () => navigation.goBack() },
            ],
          );
        });
      },
    );
  }

  return (
    <Container>
      <Header back />
      <Title>Cadastrar Novo Cliente</Title>
      <KeyboardAvoidingContainer>
        <ScrollContainer>
          <InputStyled
            placeholder="Nome"
            value={name}
            onChangeText={(text) => setName(text)}
            onSubmitEditing={() => addessRef.current.focus()}
          />
          <InputStyled
            placeholder="Endereço"
            refInput={addessRef}
            value={addess}
            onChangeText={(text) => setAddess(text)}
            onSubmitEditing={() => contactRef.current.focus()}
          />
          <InputStyled
            placeholder="Contato"
            value={contact}
            onChangeText={(text) => setContact(text)}
            refInput={contactRef}
            onSubmitEditing={() => submit()}
          />
          <ButtonStyled onPress={submit}>Cadastrar Cliente</ButtonStyled>
        </ScrollContainer>
      </KeyboardAvoidingContainer>
    </Container>
  );
}
