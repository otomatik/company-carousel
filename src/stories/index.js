import React from 'react';
import { storiesOf } from '@storybook/react';
import { Progress } from '../ui/progress';
import { Carousel } from '../ui/carousel';
import { Grid } from '../ui/grid';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { PhotoTile, QuoteTile, VideoTile } from '../ui/tile';
import { More, Navigation, Play } from '../ui/button';

const images = {
  laundry:
    'https://cdn.pixabay.com/photo/2014/08/08/20/54/laundry-413688_1280.jpg',
  suit: 'https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_1280.jpg',
  cat: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/cat-984097_1280.jpg',
  sheep:
    'https://cdn.pixabay.com/photo/2016/11/13/21/46/sheep-1822137_1280.jpg',
  pug: 'https://cdn.pixabay.com/photo/2016/02/19/11/53/pug-1210025_1280.jpg',
  dry: 'https://cdn.pixabay.com/photo/2015/01/01/22/15/woman-586185_1280.jpg',
};

const tiles = [
  {
    id: '1',
    kind: 'quote',
    data: { text: 'Citation' },
  },
  {
    id: '2',
    kind: 'video',
    data: {
      url: '',
      thumbnail: images.suit,
      title: 'Crédit',
      subtitle: 'Photographer',
    },
  },
  {
    id: '3',
    kind: 'photo',
    data: {
      url: '',
      thumbnail: images.laundry,
    },
  },
  {
    id: '4',
    kind: 'quote',
    data: { text: 'Citation' },
  },
  {
    id: '5',
    kind: 'video',
    data: {
      url: '',
      thumbnail: images.cat,
      title: 'Crédit',
      subtitle: 'Photographer',
    },
  },
  {
    id: '6',
    kind: 'photo',
    data: { url: '', thumbnail: images.pug },
  },
  {
    id: '7',
    kind: 'quote',
    data: { text: 'Citation' },
  },
  {
    id: '8',
    kind: 'video',
    data: {
      url: '',
      thumbnail: images.sheep,
      title: 'Crédit',
      subtitle: 'Photographer',
    },
  },
  {
    id: '9',
    kind: 'photo',
    data: { url: '', thumbnail: images.dry },
  },
];

const data = {
  companyName: 'The boring company',
  companyLogo: 'http://',
  wttjProfile: 'http://',
  tiles,
};

storiesOf('Carousel', module)
  .add('desktop', () => <Carousel data={data} columns={2} rows={2} />)
  .add('autoplay', () => <Carousel autoplay data={data} columns={2} rows={2} />)
  .add('mobile', () => (
    <MobileContainer>
      <Carousel data={data} mobile rows={2} />
    </MobileContainer>
  ));

const MobileContainer = styled.div`
  height: 100vh;
  width: 30vw;
  overflow: hidden;
`;

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

storiesOf('Tile', module)
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
        thumbnail={text('thumbnail', images.laundry)}
      />
    </TileContainer>
  ))
  .add('Video', () => (
    <TileContainer>
      <VideoTile
        title="Titre"
        subtitle="Sous-titre"
        url={text('url', 'http://')}
        thumbnail={text('thumbnail', images.suit)}
      />
    </TileContainer>
  ));

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .add('horizontal', () => <Progress percentage={number('percentage', 50)} />);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('arrows', () => [
    <Navigation key="left" direction="left" onClick={action('clicked')} />,
    <Navigation key="right" direction="right" onClick={action('clicked')} />,
  ])
  .add('play', () => <Play onClick={action('play')} />)
  .add('more', () => <More onClick={action('more')} />);
