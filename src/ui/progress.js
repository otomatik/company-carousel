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
  width: ${props => props.percentage}%;
  transition: width 300ms ease-in-out;
  height: 100%;
  background: #50805d;
`;
