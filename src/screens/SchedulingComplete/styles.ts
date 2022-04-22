import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.header};
  
  padding-top: 96px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: ${RFValue(80)}px;
  padding-top: ${RFValue(40)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(30)}px;

  color: ${({ theme }) => theme.colors.shape};

  margin-top: ${RFValue(40)}px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.text_detail};

  margin-top: ${RFValue(16)}px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  margin: ${RFValue(80)}px 0;
`;
