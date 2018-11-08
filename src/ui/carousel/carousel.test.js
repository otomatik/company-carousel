import { Carousel, computeAreasCount } from './';
import { shallow } from 'enzyme';
import React from 'react';
import { Progress } from '../progress';
import { Navigation } from '../button';

describe('Carousel', () => {
  const fakeTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const data = { tiles: fakeTiles };

  it('should match snapshot', () => {
    // when
    const carousel = shallow(<Carousel columns={2} rows={2} data={data} />);

    // then
    expect(carousel).toMatchSnapshot();
  });

  it('should match snapshot, when is mobile = "true" then column is overridden to "1"', () => {
    // when
    const carousel = shallow(
      <Carousel mobile columns={2} rows={2} data={data} />
    );

    // then
    expect(carousel).toMatchSnapshot();
  });

  it('should match snapshot, when currentArea is 0 then percentage is 20', () => {
    // when
    const carousel = shallow(
      <Carousel mobile columns={2} rows={2} data={data} />
    );

    // then
    expect(carousel).toMatchSnapshot();
  });

  it('should set percentage to 40 when currentArea is 1', () => {
    // given
    const carousel = shallow(
      <Carousel mobile columns={2} rows={2} data={data} />
    );

    // when
    carousel.setState({ currentArea: 1 });

    // then
    expect(carousel.find(Progress).prop('percentage')).toBe(40);
  });

  it('should set currentArea to 1 when clicking on the right navigation button', () => {
    // given
    const carousel = shallow(<Carousel columns={2} rows={2} data={data} />);

    // when
    carousel
      .find(Navigation)
      .last()
      .prop('onClick')();

    // then
    expect(carousel.state('currentArea')).toBe(1);
  });

  it('should keep currentArea to 0 when clicking on the right navigation button but already on the final area', () => {
    // given
    const carousel = shallow(
      <Carousel columns={2} rows={2} data={{ tiles: [1, 2, 3] }} />
    );

    // when
    carousel
      .find(Navigation)
      .last()
      .prop('onClick')();

    // then
    expect(carousel.state('currentArea')).toBe(0);
  });
});

describe('computeAreasCount', () => {
  it('should return 3 for a 2 x 2 grid with 12 tiles', () => {
    // when
    const count = computeAreasCount(12, 2, 2);

    // then
    expect(count).toBe(3);
  });

  it('should return 3 for a 2 x 2 grid with 10 tiles', () => {
    // when
    const count = computeAreasCount(12, 2, 2);

    // then
    expect(count).toBe(3);
  });

  it('should return 4 for a 2 x 2 grid with 13 tiles', () => {
    // when
    const count = computeAreasCount(13, 2, 2);

    // then
    expect(count).toBe(4);
  });

  it('should return 5 for a 1 x 2 grid with 10 tiles', () => {
    // when
    const count = computeAreasCount(10, 1, 2);

    // then
    expect(count).toBe(5);
  });
});
