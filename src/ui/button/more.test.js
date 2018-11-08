import { More } from './';
import { shallow } from 'enzyme';
import React from 'react';

describe('More', () => {
  it('should match snapshot', () => {
    // when
    const button = shallow(<More />);

    // then
    expect(button).toMatchSnapshot();
  });
});
