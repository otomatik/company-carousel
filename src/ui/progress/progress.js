import React from 'react';
import styled from 'styled-components';

export const Progress = ({ percentage }) => (
  <Container>
    <Fill percentage={percentage} />
  </Container>
);

const Container = styled.div`
  flex: 1;
  height: 4px;
  background: #333;
`;

const Fill = styled.div`
  height: 100%;
  width: ${props => props.percentage}%;
  transition: width 300ms ease-in-out;
  background: rgb(0, 194, 154);
`;
