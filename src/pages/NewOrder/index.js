import React, { useState, useRef } from 'react';
import Header from '../../components/Header';

import {
  Container, Title, KeyboardAvoidingContainer, ScrollContainer, InputStyled, ButtonStyled,
} from '../../styles/forms';
import { TextInfo, ContainerRow } from './styles';

export default function NewOrder() {
  const [description, setDescription] = useState('');
  const [valueTime, setValueTime] = useState('');
  const [totalTime, setTotalTime] = useState('');

  const valueTimeRef = useRef();
  const totalTimeRef = useRef();

  function submit() {
    console.log('TESTE');
  }

  return (
    <Container>
      <Header back />
      <Title>Novo Serviço</Title>
      <KeyboardAvoidingContainer>
        <ScrollContainer>
          <TextInfo>Trator: Cabinado BLA BLA BLA</TextInfo>
          <TextInfo>Cliente: Jão BLA BLA</TextInfo>
          <InputStyled
            placeholder="Descrição"
            value={description}
            onChangeText={(text) => setDescription(text)}
            onSubmitEditing={() => valueTimeRef.current.focus()}
          />
          <ContainerRow>
            <InputStyled
              placeholder="Valor Hora"
              refInput={valueTimeRef}
              value={valueTime}
              onChangeText={(text) => setValueTime(text)}
              onSubmitEditing={() => totalTimeRef.current.focus()}
            />
            <InputStyled
              placeholder="Total de Horas"
              refInput={totalTimeRef}
              value={totalTime}
              onChangeText={(text) => setTotalTime(text)}
              onSubmitEditing={() => submit()}
            />
          </ContainerRow>

          <ButtonStyled onPress={() => submit()}>
            Salvar
          </ButtonStyled>
        </ScrollContainer>
      </KeyboardAvoidingContainer>


    </Container>
  );
}
