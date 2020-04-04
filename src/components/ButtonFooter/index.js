import React from 'react';

import { Container, TextButton } from './styles';

export default function ButtonFooter({ style, children, ...props }) {
  return (
    <Container style={style} {...props}>
      <TextButton>{children}</TextButton>
    </Container>
  );
}
