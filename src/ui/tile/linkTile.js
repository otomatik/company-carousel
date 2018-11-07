import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { Tile, tilePropTypes } from './tile';

export const LinkTile = ({ url, color, children }) => (
  <Link href={url} target="_blank">
    <Tile color={color}>{children}</Tile>
  </Link>
);

LinkTile.propTypes = {
  ...tilePropTypes,
  url: PropTypes.string.isRequired,
};

const Link = styled.a``;

export const Thumbnail = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: url(${props => props.thumbnail}) no-repeat center center;
  background-size: cover;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  ${Link}:hover & {
    transform: scale(1.1);
  }
`;
