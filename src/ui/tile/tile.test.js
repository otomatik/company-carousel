import { Tile } from './';
import { shallow } from 'enzyme';
import React from 'react';

describe('Tile', () => {
  it('should match snapshot', () => {
    // when
    const tile = shallow(<Tile color="yellow">tuile</Tile>);

    // then
    expect(tile).toMatchSnapshot();
  });
});
