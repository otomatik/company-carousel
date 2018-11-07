import { Tile } from './';
import { shallow } from 'enzyme';
import React from 'react';
import { LinkTile, PhotoTile, QuoteTile, VideoTile } from './tile';

describe('Tile', () => {
  it('should match snapshot', () => {
    // when
    const tile = shallow(<Tile color="yellow">tuile</Tile>);

    // then
    expect(tile).toMatchSnapshot();
  });
});

describe('LinkTile', () => {
  it('should match snapshot', () => {
    // when
    const tile = shallow(
      <LinkTile url="http://" color="yellow">
        tuile
      </LinkTile>
    );

    // then
    expect(tile).toMatchSnapshot();
  });
});

describe('QuoteTile', () => {
  it('should match snapshot', () => {
    // when
    const tile = shallow(<QuoteTile text="coucou" />);

    // then
    expect(tile).toMatchSnapshot();
  });
});

describe('VideoTile', () => {
  it('should match snapshot', () => {
    // when
    const tile = shallow(<VideoTile url="http://" thumbnail="http://" />);

    // then
    expect(tile).toMatchSnapshot();
  });
});

describe('VideoTile', () => {
  it('should match snapshot', () => {
    // when
    const tile = shallow(<PhotoTile url="http://" thumbnail="http://" />);

    // then
    expect(tile).toMatchSnapshot();
  });
});
