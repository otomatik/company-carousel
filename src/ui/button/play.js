import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Play = ({ onClick }) => (
  <Circle alt="Play" onClick={onClick}>
    &#x25b6;
  </Circle>
);

Play.propTypes = {
  onClick: PropTypes.func,
};

const Circle = styled.button`
  position: relative;
  height: 30px;
  width: 30px;
  padding: 0;
  outline: 0 none;
  border: none;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 100%;

  &:hover {
    background: rgb(0, 133, 104);
  }
`;
