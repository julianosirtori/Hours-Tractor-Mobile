import styled from 'styled-components/native';
import Input from '../components/Input';
import Button from '../components/Button';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background: #FEFEFE;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 500;
  font-family: 'Oswald-SemiBold';
  margin: 0 auto;
  margin-top: 8px;
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

export const InputStyled = styled(Input)`
  padding-left: 32px;
  padding-right: 32px;
`;

export const ButtonStyled = styled(Button)`
  margin: 32px auto;
`;
