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

export default function Register() {
  const [showButtonFooter, setShowButtonFooter] = useState(true);

  const passwordRef = useRef();
  const emailRef = useRef();
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate('Login');
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
          <Title>Cadastra-se</Title>
          <InputStyled
            label="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome aqui"
            returnKeyType="next"
            refInput={emailRef}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <InputStyled
            label="Email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            refInput={emailRef}
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
          <ButtonLogin onPress={handleSubmit}>Cadastra-se</ButtonLogin>

        </ScrollContainer>
        {showButtonFooter
          && (
          <ButtonFooterLogin onPress={navigateToLogin}>
            Já Tenho Conta
          </ButtonFooterLogin>
          )}

      </KeyboardAvoidingContainer>
    </Container>

  );
}
