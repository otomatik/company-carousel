import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Progress = ({ percentage }) => (
  <Container>
    <Fill percentage={percentage} />
  </Container>
);

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 4px;
  background: ${props => props.theme.colors.secondary};
`;

const Fill = styled.div`
  height: 100%;
  width: ${props => props.percentage}%;
  transition: width 300ms ease-in-out;
  background: ${props => props.theme.colors.primary};
`;
