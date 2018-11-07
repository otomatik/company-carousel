import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Tile = ({ color, children }) => (
  <Container color={color}>{children}</Container>
);

export const tilePropTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};

Tile.propTypes = tilePropTypes;

const Container = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  height: 100%;
  color: white;
  overflow: hidden;
  background: ${props => props.color};
`;
