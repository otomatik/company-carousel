import { Navigation } from './';
import { shallow } from 'enzyme';
import React from 'react';

describe('Navigation', () => {
  it('should match snapshot - left', () => {
    // when
    const button = shallow(<Navigation direction="left" />);

    // then
    expect(button).toMatchSnapshot();
  });

  it('should match snapshot - right (default)', () => {
    // when
    const button = shallow(<Navigation />);

    // then
    expect(button).toMatchSnapshot();
  });
});
