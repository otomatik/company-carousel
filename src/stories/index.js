import React from 'react';
import { storiesOf } from '@storybook/react';
import { Progress } from '../ui/progress';
import { Carousel } from '../ui/carousel';
import { Grid } from '../ui/grid';
import { action } from '@storybook/addon-actions';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { PhotoTile, QuoteTile, VideoTile } from '../ui/tile';
import { More, Navigation, Play } from '../ui/button';

const images = {
  burger:
    'https://images.unsplash.com/photo-1536857620814-08877a2162d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50578bf7f75e28eb9fb151dec11d4762&auto=format&fit=crop&w=1500&q=80',
  sushi:
    'https://images.unsplash.com/photo-1501735972267-d5c1bc03655c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d5c06ebc11a8030b7636bcbfac7cc2ff&auto=format&fit=crop&w=1500&q=80',
  fries:
    'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3c90e64f4b7225ca5d2d6aa9d824c4f&auto=format&fit=crop&w=1500&q=80',
  donuts:
    'https://images.unsplash.com/photo-1541390540380-fe43b8361ac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c026122030ec83c3443356ba6525c6c5&auto=format&fit=crop&w=668&q=80',
  pancakes:
    'https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c988a8a0bb52434ffc0d3b326b15f4a&auto=format&fit=crop&w=1500&q=80',
  salad:
    'https://images.unsplash.com/photo-1540101042567-c3222809544b?ixlib=rb-0.3.5&s=9103452eff8bc630b68a57a99ee1d596&auto=format&fit=crop&w=668&q=80',
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
      thumbnail: images.sushi,
      title: 'Crédit',
      subtitle: 'Photographer',
    },
  },
  {
    id: '3',
    kind: 'photo',
    data: {
      url: '',
      thumbnail: images.burger,
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
      thumbnail: images.fries,
      title: 'Crédit',
      subtitle: 'Photographer',
    },
  },
  {
    id: '6',
    kind: 'photo',
    data: { url: '', thumbnail: images.pancakes },
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
      thumbnail: images.donuts,
      title: 'Crédit',
      subtitle: 'Photographer',
    },
  },
  {
    id: '9',
    kind: 'photo',
    data: { url: '', thumbnail: images.salad },
  },
];

const data = {
  companyName: 'Yummy company',
  companyLogo:
    'https://www.graphicsprings.com/filestorage/stencils/56c6a0fe23aaf1279c73b9940b2fc873.png?width=500&height=500',
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
