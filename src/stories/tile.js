import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { PhotoTile, QuoteTile, VideoTile } from '../ui/tile';
import { images } from '../data';
import React from 'react';

export const tileStories = storiesOf('Tile', module)
  .addDecorator(withKnobs)
  .add('Quote', () => (
    <TileContainer>
      <QuoteTile text={text('quote', 'coucou')} />
    </TileContainer>
  ))
  .add('Photo', () => (
    <TileContainer>
      <PhotoTile
        url={text('url', 'http://')}
        thumbnail={text('thumbnail', images.burger)}
      />
    </TileContainer>
  ))
  .add('Video', () => (
    <TileContainer>
      <VideoTile
        title="Titre"
        subtitle="Sous-titre"
        url={text('url', 'http://')}
        thumbnail={text('thumbnail', images.sushi)}
      />
    </TileContainer>
  ));

const TileContainer = styled.div`
  height: 30vh;
  width: 30vw;
  overflow: hidden;
`;
