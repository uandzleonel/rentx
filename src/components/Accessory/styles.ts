import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  min-width: 26%;
  width: ${RFValue(108)}px;
  height: ${RFValue(92)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: 16px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-top: 8px;
`;
