import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 230px;

background: #525252;
border-radius: 2px;
margin-bottom: 16px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 8px;
`;


export const TextName = styled.Text`
  font-size: 22px;
  padding-top: 8px;
  font-weight: 500;
  font-family: 'Oswald-SemiBold';
  color: #fff;
  margin: 0 auto;
  margin-bottom: 8px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background: #FFFFFF;
  margin-left: 4px;
`;
