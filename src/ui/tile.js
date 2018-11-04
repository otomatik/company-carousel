import React from 'react';
import styled from 'styled-components';

export const Tile = ({ color, hidden }) => (
  <Container hidden={hidden} color={color}>
    tuile
  </Container>
);

const Container = styled.div`
  display: flex;
  flex: 1;
  color: white;
  background: ${props => props.color};
`;
