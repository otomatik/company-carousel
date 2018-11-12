import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const More = ({ onClick, className }) => (
  <Circle className={className} alt="More" onClick={onClick}>
    More
    <Glass />
  </Circle>
);

More.propTypes = {
  onClick: PropTypes.func,
};

const Circle = styled.button`
  position: relative;
  height: 50px;
  width: 50px;
  padding: 0px;
  outline: 0 none;
  border: none;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0;
`;

const Glass = styled.span`
  transform: scale(1.5);
  position: relative;
  display: inline-block;
  border-radius: 30px;
  height: 6px;
  width: 6px;
  margin-right: 2px;
  margin-bottom: 2px;
  border: 2px solid white;

  &:after {
    content: '';
    height: 2px;
    width: 6px;
    background: white;
    position: absolute;
    top: 7px;
    left: 5px;
    transform: rotate(45deg);
  }
`;
