import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import SourceLogo from '../../assets/logo.png';
import { Container, Logo, BtnBack } from './styles';

export default function Header({ back }) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {back && (
      <BtnBack onPress={goBack}>
        <MaterialIcons name="arrow-back" size={32} color="#B31C2C" />
      </BtnBack>
      )}


      <Logo source={SourceLogo} />
    </Container>
  );
}
