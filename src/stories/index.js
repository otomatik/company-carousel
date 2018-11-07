import React from 'react';
import { storiesOf } from '@storybook/react';
import { Progress } from '../ui/progress';
import { Carousel } from '../ui/carousel';
import { Grid } from '../ui/grid';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { PhotoTile, QuoteTile, VideoTile } from '../ui/tile/tile';

const tiles = [
  {
    id: '1',
    kind: 'quote',
    data: { text: 'essai' },
  },
  {
    id: '2',
    kind: 'video',
    data: { url: '', thumbnail: '' },
  },
  {
    id: '3',
    kind: 'photo',
    data: { url: '', thumbnail: '' },
  },
  {
    id: '4',
    kind: 'quote',
    data: { text: 'essai' },
  },
  {
    id: '5',
    kind: 'video',
    data: { url: '', thumbnail: '' },
  },
  {
    id: '6',
    kind: 'photo',
    data: { url: '', thumbnail: '' },
  },
  {
    id: '7',
    kind: 'quote',
    data: { text: 'essai' },
  },
  {
    id: '8',
    kind: 'video',
    data: { url: '', thumbnail: '' },
  },
  {
    id: '9',
    kind: 'photo',
    data: { url: '', thumbnail: '' },
  },
];

storiesOf('Carousel', module)
  .addDecorator(withKnobs)
  .add('desktop', () => (
    <Carousel data={tiles} columns={2} rows={2} cursor={number('cursor', 0)} />
  ))
  .add('mobile', () => (
    <Carousel data={tiles} mobile rows={2} cursor={number('cursor', 0)} />
  ));

const GridContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('2 x 2', () => (
    <GridContainer>
      <Grid
        tiles={tiles}
        columns={2}
        rows={2}
        currentArea={number('current area', 0)}
      />
    </GridContainer>
  ))
  .add('3 x 2', () => (
    <GridContainer>
      <Grid
        tiles={tiles}
        columns={2}
        rows={3}
        currentArea={number('current area', 0)}
      />
    </GridContainer>
  ))
  .add('2 x 3', () => (
    <GridContainer>
      <Grid
        tiles={tiles}
        columns={3}
        rows={2}
        currentArea={number('current area', 0)}
      />
    </GridContainer>
  ));

const TileContainer = styled.div`
  height: 30vh;
  width: 30vw;
  overflow: hidden;
`;

storiesOf('Tiles', module)
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
        thumbnail={text(
          'thumbnail',
          'https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg'
        )}
      />
    </TileContainer>
  ))
  .add('Video', () => (
    <TileContainer>
      <VideoTile
        url={text('url', 'http://')}
        thumbnail={text(
          'thumbnail',
          'https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg'
        )}
      />
    </TileContainer>
  ));

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .add('horizontal', () => <Progress percentage={number('percentage', 50)} />);
