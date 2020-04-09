import React, { useState, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';

import db from '../../data';
import Header from '../../components/Header';
import {
  Container, Title, KeyboardAvoidingContainer, ScrollContainer, InputStyled, ButtonStyled,
} from '../../styles/forms';

export default function EditClient() {
  const navigation = useNavigation();
  const route = useRoute();

  const { client } = route.params;

  const [name, setName] = useState(client.name);
  const [addess, setAddess] = useState(client.address);
  const [contact, setContact] = useState(client.contact);

  const addessRef = useRef();
  const contactRef = useRef();

  function submit() {
    db.transaction(
      (tx) => {
        tx.executeSql('UPDATE clients SET name=?, address=?, contact=?  WHERE id= ?;', [name, addess, contact, client.id], () => {
          Alert.alert(
            'Atenção',
            'Cliente Editado com sucesso',
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
      <Title>Editar Cliente</Title>
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
