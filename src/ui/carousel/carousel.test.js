import { Carousel, computeAreasCount } from './';
import { shallow } from 'enzyme';
import React from 'react';

describe('Carousel', () => {
  const fakeTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const data = { tiles: fakeTiles };

  it('should match snapshot', () => {
    // when
    const carousel = shallow(
      <Carousel columns={2} rows={2} cursor={1} data={data} />
    );

    // then
    expect(carousel).toMatchSnapshot();
  });

  it('should match snapshot, when is mobile = "true" then column is overridden to "1"', () => {
    // when
    const carousel = shallow(
      <Carousel mobile columns={2} rows={2} cursor={1} data={data} />
    );

    // then
    expect(carousel).toMatchSnapshot();
  });

  it('should match snapshot, when cursor is 0 then percentage is 20', () => {
    // when
    const carousel = shallow(
      <Carousel mobile columns={2} rows={2} cursor={0} data={data} />
    );

    // then
    expect(carousel).toMatchSnapshot();
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
