import { Grid } from './';
import { shallow } from 'enzyme';
import React from 'react';

describe('Grid', () => {
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
  ];

  it('should match snapshot', () => {
    // when
    const grid = shallow(
      <Grid tiles={tiles} columns={2} rows={2} currentArea={0} />
    );

    // then
    expect(grid).toMatchSnapshot();
  });
});
