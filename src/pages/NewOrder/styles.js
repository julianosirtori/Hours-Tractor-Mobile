import styled from 'styled-components/native';

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

export const Content = styled.ScrollView`
  align-self: stretch;
`;

export const TextInfo = styled.Text`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Oswald-SemiBold';
  margin: 0 auto;
`;
