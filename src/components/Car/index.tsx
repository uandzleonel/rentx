import React from 'react';

import GasolineSvg from '../../assets/gasoline.svg';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  Thumbnail,
} from './styles';

export function Car() {
  return (
    <Container>
      <Details>
        <Brand>AUDI</Brand>
        <Name>RS 5 Coupé</Name>

        <About>
          <Rent>
            <Period>AO DIA</Period>
            <Price>R$ 180,00</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <Thumbnail
        source={{
          uri: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
        }}
      />
    </Container>
  );
}
