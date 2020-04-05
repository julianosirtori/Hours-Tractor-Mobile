import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container, TextName, Buttons, Button,
} from './styles';

export default function Client({ ...props }) {
  return (
    <Container {...props}>
      <TextName>Cliente Numero 01</TextName>
      <Buttons>
        <Button>
          <MaterialIcons name="edit" size={28} color="#525252" />
        </Button>
        <Button>
          <MaterialIcons name="delete" size={28} color="#525252" />
        </Button>
      </Buttons>
    </Container>
  );
}
