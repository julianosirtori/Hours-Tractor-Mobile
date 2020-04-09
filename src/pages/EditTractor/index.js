import React, { useState, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';

import db from '../../data';
import Header from '../../components/Header';
import {
  Container, Title, KeyboardAvoidingContainer, ScrollContainer, InputStyled, ButtonStyled,
} from '../../styles/forms';


export default function EditTractor() {
  const navigation = useNavigation();
  const route = useRoute();

  const { tractor } = route.params;

  const [brand, setBrand] = useState(tractor.brand);
  const [year, setYear] = useState(tractor.year);
  const [name, setName] = useState(tractor.name);
  const [totalHours, setTotalHours] = useState(tractor.totalHours);

  const yearRef = useRef();
  const nameRef = useRef();
  const totalHoursRef = useRef();

  function submit() {
    db.transaction(
      (tx) => {
        tx.executeSql('UPDATE tractors SET brand=?, year=?, name=?, totalHours=?  WHERE id= ?;', [brand, year, name, totalHours, tractor.id], () => {
          Alert.alert(
            'Atenção',
            'Trator Editado com sucesso',
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
      <Title>Editar Trator</Title>
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
            value={String(year)}
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
            value={String(year)}
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
