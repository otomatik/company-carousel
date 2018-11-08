import PropTypes from 'prop-types';
import React from 'react';
import { LinkTile, Thumbnail } from './linkTile';
import styled from 'styled-components';
import { Play } from '../button';

export const VideoTile = ({ url, thumbnail, title, subtitle }) => (
  <LinkTile url={url}>
    <Thumbnail thumbnail={thumbnail} />
    <Container>
      <Play />
      <Text>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Text>
    </Container>
  </LinkTile>
);

VideoTile.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px;
  z-index: 1;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Title = styled.p`
  margin: 0;
  font-size: 16px;
  font-family: 'Helvetica', sans-serif;
`;
const SubTitle = styled(Title)`
  font-size: 12px;
`;
