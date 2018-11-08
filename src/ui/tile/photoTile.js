import PropTypes from 'prop-types';
import React from 'react';
import { LinkTile, Thumbnail } from './linkTile';
import { More } from '../button';
import styled from 'styled-components';

export const PhotoTile = ({ url, thumbnail }) => (
  <LinkTile url={url}>
    <Thumbnail thumbnail={thumbnail} />
    <Container>
      <DisplayMoreIndicatorOnHover />
    </Container>
  </LinkTile>
);

PhotoTile.propTypes = {
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const DisplayMoreIndicatorOnHover = styled(More)`
  transform: scale3d(0, 0, 1);
  transition: transform 0.2s ease-out;

  ${Container}:hover & {
    transform: scale3d(1, 1, 1);
  }
`;
