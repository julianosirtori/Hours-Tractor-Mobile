import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import { Container, BtnNewOrder } from './styles';

export default function Home() {
  const navigation = useNavigation();

  function createNewOrder() {
    navigation.navigate('ChooseTractor');
  }

  return (
    <Container>
      <Header />
      <BtnNewOrder onPress={createNewOrder}>
        Novo Serviço
      </BtnNewOrder>
    </Container>
  );
}
