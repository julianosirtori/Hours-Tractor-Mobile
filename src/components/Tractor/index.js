import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container, Header, TextHeader, TextName, Buttons, Button,
} from './styles';

export default function Tractor({ tractor, ...props }) {
  return (
    <Container {...props}>
      <Header>
        <TextHeader>{tractor.brand}</TextHeader>
        <TextHeader>{tractor.year}</TextHeader>
      </Header>
      <TextName>{tractor.name}</TextName>
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
