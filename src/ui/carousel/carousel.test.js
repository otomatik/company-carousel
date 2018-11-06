import { Carousel } from './';
import { shallow } from 'enzyme';
import React from 'react';

describe('Carousel', () => {
  it('should match snapshot', () => {
    // when
    const carousel = shallow(<Carousel columns={2} rows={2} cursor={1} />);

    // then
    expect(carousel).toMatchSnapshot();
  });

  it('should match snapshot when is mobile column is overridden to "1"', () => {
    // when
    const carousel = shallow(
      <Carousel mobile columns={2} rows={2} cursor={1} />
    );

    // then
    expect(carousel).toMatchSnapshot();
  });
});
