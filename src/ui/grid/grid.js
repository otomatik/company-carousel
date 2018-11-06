import React from 'react';
import styled from 'styled-components';
import { Tile } from '../tile';
import { computeAreasCount } from '../carousel';

export const TILE_COUNT = 9;

export const Grid = ({ columns, rows, currentArea }) => {
  const containerProps = {
    totalColumns: columns * computeAreasCount(TILE_COUNT, columns, rows),
    columns,
    rows,
    currentArea,
  };
  return (
    <Container {...containerProps}>
      <Tile color="orange" />
      <Tile color="red" />
      <Tile color="green" />
      <Tile color="blue" />
      <Tile color="violet" />
      <Tile color="black" />
      <Tile color="gray" />
      <Tile color="purple" />
      <Tile color="yellow" />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${props => props.totalColumns},
    ${props => 100 / props.columns}%
  );
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  transition: margin-left 800ms ease-in-out;
  grid-auto-flow: column;
  margin-left: -${props => props.currentArea * 100}%;
  height: 100%;
  width: 100%;
  color: white;
`;
