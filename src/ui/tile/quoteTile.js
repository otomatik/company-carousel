import PropTypes from 'prop-types';
import React from 'react';
import { Tile } from './tile';

export const QuoteTile = ({ text }) => <Tile color="#444">{text}</Tile>;

QuoteTile.propTypes = {
  text: PropTypes.string.isRequired,
};
