import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container, Header, TextHeader, TextName, Buttons, Button,
} from './styles';

export default function Tractor({ ...props }) {
  return (
    <Container {...props}>
      <Header>
        <TextHeader>Valtra</TextHeader>
        <TextHeader>2015</TextHeader>
      </Header>
      <TextName>Trator Numero 01</TextName>
      <Buttons>
        <Button>
          <MaterialIcons name="edit" size={28} color="#FFA200" />
        </Button>
        <Button>
          <MaterialIcons name="delete" size={28} color="#FFA200" />
        </Button>
      </Buttons>
    </Container>
  );
}
