import PropTypes from 'prop-types';
import React from 'react';
import { LinkTile, Thumbnail } from './linkTile';

export const VideoTile = ({ url, thumbnail }) => (
  <LinkTile color="red" url={url}>
    <Thumbnail thumbnail={thumbnail} />
  </LinkTile>
);

VideoTile.propTypes = {
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
