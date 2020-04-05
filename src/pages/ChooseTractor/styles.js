import styled from 'styled-components/native';
import ButtonFooter from '../../components/ButtonFooter';

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

export const Tractors = styled.ScrollView`
  margin-top: 16px;
  padding: 0 60px;
  margin-bottom: 56px;
`;

export const BtnAddTractor = styled(ButtonFooter)`
  position: absolute;
  bottom: 0;
`;
