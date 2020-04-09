import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Alert } from 'react-native';

import db from '../../data';
import {
  Container, TextName, Buttons, Button,
} from './styles';

export default function Client({ client, deleteCallBack, ...props }) {
  const navigation = useNavigation();

  function deleteClient(id) {
    db.transaction(
      (tx) => {
        tx.executeSql('delete from clients where id = ?;', [id]);
      },
    );
    deleteCallBack();
  }

  function deleteAlert(id) {
    Alert.alert(
      'Atenção',
      'Tem certeza que deseja apagar esse cliente ?',
      [
        { text: 'Sim', onPress: () => deleteClient(id) },
        { text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      ],
    );
  }

  function navigateToEditClient() {
    navigation.navigate('EditClient', { client });
  }

  return (
    <Container {...props}>
      <TextName>{client.name}</TextName>
      <Buttons>
        <Button onPress={() => navigateToEditClient()}>
          <MaterialIcons name="edit" size={28} color="#525252" />
        </Button>
        <Button onPress={() => deleteAlert(client.id)}>
          <MaterialIcons name="delete" size={28} color="#525252" />
        </Button>
      </Buttons>
    </Container>
  );
}
