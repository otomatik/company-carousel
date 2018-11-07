import React from 'react';
import styled from 'styled-components';

export const Tile = ({ color, children }) => (
  <Container color={color}>{children}</Container>
);

export const LinkTile = ({ url, color, children }) => (
  <Link href={url}>
    <Tile color={color}>{children}</Tile>
  </Link>
);

const Link = styled.a``;

export const QuoteTile = ({ text }) => <Tile color="#333">{text}</Tile>;

export const VideoTile = ({ url, thumbnail }) => (
  <LinkTile color="red" url={url}>
    <Thumbnail thumbnail={thumbnail} />
  </LinkTile>
);

export const PhotoTile = ({ url, thumbnail }) => (
  <LinkTile color="yellow" url={url}>
    <Thumbnail thumbnail={thumbnail} />
  </LinkTile>
);

const Thumbnail = styled.div`
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

const Container = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  height: 100%;
  color: white;
  background: ${props => props.color};
`;
