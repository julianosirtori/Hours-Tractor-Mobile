import React, { useState, useEffect, useRef } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SourceLogo from '../../assets/logo.png';
import {
  KeyboardAvoidingContainer,
  Container,
  Logo,
  Title,
  ScrollContainer,
  InputStyled,
  ButtonLogin,
  ButtonFooterLogin,
} from './styles';

export default function Login() {
  const [showButtonFooter, setShowButtonFooter] = useState(true);

  const passwordRef = useRef();
  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  function handleSubmit() {
    console.log('Submit');
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setShowButtonFooter(false));
    Keyboard.addListener('keyboardDidHide', () => setShowButtonFooter(true));
  }, []);

  return (
    <Container>
      <KeyboardAvoidingContainer>
        <ScrollContainer>
          <Logo source={SourceLogo} />
          <Title>Entrar</Title>
          <InputStyled
            label="Email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <InputStyled
            label="Senha"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="send"
            refInput={passwordRef}
            onSubmitEditing={handleSubmit}
            placeholder="********"
          />
          <ButtonLogin onPress={handleSubmit}>Entrar</ButtonLogin>

        </ScrollContainer>
        {showButtonFooter
          && (
          <ButtonFooterLogin onPress={navigateToRegister}>
            Não Tenho Conta
          </ButtonFooterLogin>
          )}

      </KeyboardAvoidingContainer>
    </Container>

  );
}
