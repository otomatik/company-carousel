import { Grid } from './';
import { shallow } from 'enzyme';
import React from 'react';

describe('Grid', () => {
  it('should match snapshot', () => {
    // when
    const grid = shallow(<Grid columns={2} rows={2} currentArea={0} />);

    // then
    expect(grid).toMatchSnapshot();
  });
});
