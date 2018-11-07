import React from 'react';
import styled from 'styled-components';
import { Tile } from '../tile';
import { computeAreasCount } from '../carousel';
import { PhotoTile, QuoteTile, VideoTile } from '../tile/tile';

const switchTile = tile => {
  const props = {
    ...tile.data,
    key: tile.id,
  };
  switch (tile.kind) {
    case 'quote':
      return <QuoteTile {...props} />;
    case 'video':
      return <VideoTile {...props} />;
    case 'photo':
      return <PhotoTile {...props} />;
    default:
      return <></>;
  }
};

export const Grid = ({ columns, rows, currentArea, tiles }) => {
  const containerProps = {
    totalColumns: columns * computeAreasCount(tiles.length, columns, rows),
    columns,
    rows,
    currentArea,
  };
  return (
    <Container {...containerProps}>
      {tiles.map(tile => switchTile(tile))}
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
