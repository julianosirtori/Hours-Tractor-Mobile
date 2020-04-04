import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonFooter from '../../components/ButtonFooter';


export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background: #FEFEFE;
`;

export const KeyboardAvoidingContainer = styled.KeyboardAvoidingView.attrs({
  behavior: 'height',
})`
  width: 100%;
  height: 100%;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})`
  align-self: stretch;
`;


export const Logo = styled.Image`
  margin-top: 54px;
  margin: 48px auto 16px auto;

`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 500;
  font-family: 'Oswald-SemiBold';
  margin: 0 auto;

`;


export const InputStyled = styled(Input)`
  margin-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const ButtonLogin = styled(Button)`
  margin: 16px auto;
`;

export const ButtonFooterLogin = styled(ButtonFooter)`
  position: absolute;
  bottom: 0;
`;
