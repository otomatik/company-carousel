import PropTypes from 'prop-types';
import React from 'react';
import { Tile } from './tile';
import styled from 'styled-components';

export const QuoteTile = ({ text }) => (
  <Tile color="#444">
    <Blockquote>{text}</Blockquote>
  </Tile>
);

QuoteTile.propTypes = {
  text: PropTypes.string.isRequired,
};

const Blockquote = styled.blockquote`
  quotes: '“' '„';
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 40px;
  font-size: 20px;
  width: 100%;
  z-index: 1;

  &::before {
    position: absolute;
    content: open-quote;
    font-weight: bold;
    font-size: 100px;
    color: gray;
    top: 10px;
    z-index: -1;
    font-family: 'Georgia', serif;
  }
`;
