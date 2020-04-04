import React from 'react';

import { Container, TextButton } from './styles';

export default function Button({ style, children, ...props }) {
  return (
    <Container style={style} {...props}>
      <TextButton>{children}</TextButton>
    </Container>
  );
}
