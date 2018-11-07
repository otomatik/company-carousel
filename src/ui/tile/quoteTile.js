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
  font-size: 20px;
  width: 100%;
  z-index: 1;
  font-family: 'Helvetica', sans-serif;

  &::before {
    position: absolute;
    content: open-quote;
    font-weight: bold;
    font-size: 100px;
    color: gray;
    padding-bottom: 30px;
    z-index: -1;
    font-family: 'Georgia', serif;
  }
`;
