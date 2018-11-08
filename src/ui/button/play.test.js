import { Play } from './';
import { shallow } from 'enzyme';
import React from 'react';

describe('Play', () => {
  it('should match snapshot', () => {
    // when
    const button = shallow(<Play />);

    // then
    expect(button).toMatchSnapshot();
  });
});
