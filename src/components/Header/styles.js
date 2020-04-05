import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 32px 0 8px 16px ;
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

export const Logo = styled.Image`
  height: 48px;
  width: 120px;
  margin: auto;
`;

export const BtnBack = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
  top: 38px;
`;
