import React from 'react';

import { Container, Label, ValueInput } from './styles';

export default function Input({
  style, label, refInput, ...props
}) {
  return (
    <Container style={style}>
      <Label>{label}</Label>
      <ValueInput ref={refInput} {...props} />

    </Container>
  );
}
