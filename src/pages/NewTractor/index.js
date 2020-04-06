import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import db from '../../data';
import Header from '../../components/Header';
import {
  Container, Title, KeyboardAvoidingContainer, ScrollContainer, InputStyled, ButtonStyled,
} from './styles';

export default function NewTractor() {
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [totalHours, setTotalHours] = useState('');

  const navigation = useNavigation();

  const yearRef = useRef();
  const nameRef = useRef();
  const totalHoursRef = useRef();

  function submit() {
    db.transaction(
      (tx) => {
        tx.executeSql('insert into tractors (brand, year, name, totalHours) values (?, ?, ?, ?)', [brand, year, name, totalHours], (sucess) => {
          Alert.alert(
            'Atenção',
            'Trator Cadastrado com sucesso',
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
      <Title>Cadastrar Novo Trator</Title>
      <KeyboardAvoidingContainer>
        <ScrollContainer>
          <InputStyled
            placeholder="Marca"
            value={brand}
            onChangeText={(text) => setBrand(text)}
            onSubmitEditing={() => yearRef.current.focus()}
          />
          <InputStyled
            placeholder="Ano"
            keyboardType="numeric"
            refInput={yearRef}
            value={year}
            onChangeText={(text) => setYear(text)}
            onSubmitEditing={() => nameRef.current.focus()}
          />
          <InputStyled
            placeholder="Nome"
            value={name}
            onChangeText={(text) => setName(text)}
            refInput={nameRef}
            onSubmitEditing={() => totalHoursRef.current.focus()}
          />
          <InputStyled
            placeholder="Total de Horas"
            keyboardType="numeric"
            value={totalHours}
            onChangeText={(text) => setTotalHours(text)}
            refInput={totalHoursRef}
            onSubmitEditing={() => submit()}
          />

          <ButtonStyled onPress={submit}>Cadastrar Trator</ButtonStyled>
        </ScrollContainer>
      </KeyboardAvoidingContainer>
    </Container>
  );
}
