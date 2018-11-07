import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Navigation = ({ direction, onClick }) => (
  <Circle onClick={onClick}>
    {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
  </Circle>
);

Navigation.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
};

const Arrow = styled.i`
  padding: 4px;
  border: solid white;
  border-width: 0 2px 2px 0;
`;

const Circle = styled.button`
  position: relative;
  height: 30px;
  width: 30px;
  padding: 0;
  outline: 0 none;
  border: none;
  background: #222;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }

  &:hover {
    background: #000;
  }
`;

const ArrowLeft = styled(Arrow)`
  margin-left: 4px;
  transform: rotate(135deg);
`;

ArrowLeft.displayName = 'ArrowLeft';

const ArrowRight = styled(Arrow)`
  margin-right: 4px;
  transform: rotate(-45deg);
`;

ArrowRight.displayName = 'ArrowRight';
