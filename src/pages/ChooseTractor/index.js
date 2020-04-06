import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import db from '../../data';
import Tractor from '../../components/Tractor';
import Header from '../../components/Header';
import {
  Container, Title, Tractors, BtnAddTractor,
} from './styles';

export default function ChooseTractor() {
  const [tractors, setTractors] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'select * from tractors;',
        [],
        (_, { rows: { _array } }) => setTractors(_array),
      );
    });
  }, []);

  function selectedTractor() {
    navigation.navigate('ChooseClient');
  }

  function navigateToNewTractor() {
    navigation.navigate('NewTractor');
  }

  return (
    <Container>
      <Header back />
      <Title>Escolha o Trator</Title>
      <Tractors>
        { tractors.map((item) => (
          <Tractor
            tractor={item}
            onPress={selectedTractor}
            key={String(item.id)}
          />
        )) }
      </Tractors>
      <BtnAddTractor onPress={navigateToNewTractor}>
        Cadastrar Trator
      </BtnAddTractor>
    </Container>
  );
}
