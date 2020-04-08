import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import db from '../../data';
import {
  Container, Header, TextHeader, TextName, Buttons, Button,
} from './styles';

export default function Tractor({ tractor, deleteCallBack, ...props }) {
  const navigation = useNavigation();

  function deleteTractor(id) {
    db.transaction(
      (tx) => {
        tx.executeSql('delete from tractors where id = ?;', [id]);
      },
    );
    deleteCallBack();
  }

  function deleteAlert(id) {
    Alert.alert(
      'Atenção',
      'Tem certeza que deseja apagar esse trator ?',
      [
        { text: 'Sim', onPress: () => deleteTractor(id) },
        { text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      ],
    );
  }

  function navigateToEditTractor() {
    navigation.navigate('EditTractor');
  }

  return (
    <Container {...props}>
      <Header>
        <TextHeader>{tractor.brand}</TextHeader>
        <TextHeader>{tractor.year}</TextHeader>
      </Header>
      <TextName>{tractor.name}</TextName>
      <Buttons>
        <Button onPress={navigateToEditTractor}>
          <MaterialIcons name="edit" size={28} color="#FFA200" />
        </Button>
        <Button onPress={() => deleteAlert(tractor.id)}>
          <MaterialIcons name="delete" size={28} color="#FFA200" />
        </Button>
      </Buttons>
    </Container>
  );
}
