import PropTypes from 'prop-types';
import React from 'react';
import { LinkTile, Thumbnail } from './linkTile';

export const PhotoTile = ({ url, thumbnail }) => (
  <LinkTile color="yellow" url={url}>
    <Thumbnail thumbnail={thumbnail} />
  </LinkTile>
);

PhotoTile.propTypes = {
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
