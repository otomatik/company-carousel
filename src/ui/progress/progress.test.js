import { Progress } from './progress';
import { shallow } from 'enzyme';
import React from 'react';

describe('Progress', () => {
  it('should match snapshot', () => {
    // when
    const progress = shallow(<Progress percentage={42} />);

    // then
    expect(progress).toMatchSnapshot();
  });
});
