import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Tractor from '../../components/Tractor';
import Header from '../../components/Header';
import {
  Container, Title, Tractors, BtnAddTractor,
} from './styles';

const tractors = [1, 2, 3, 4, 5];

export default function ChooseTractor() {
  const navigation = useNavigation();

  function selectedTractor() {
    navigation.navigate('ChooseClient');
  }

  return (
    <Container>
      <Header back />
      <Title>Escolha o Trator</Title>
      <Tractors>
        { tractors.map((item) => (
          <Tractor
            onPress={selectedTractor}
            key={String(item)}
          />
        )) }
      </Tractors>
      <BtnAddTractor>
        Cadastrar Trator
      </BtnAddTractor>
    </Container>
  );
}
