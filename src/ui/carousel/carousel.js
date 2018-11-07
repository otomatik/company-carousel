import React from 'react';
import styled from 'styled-components';
import { Progress } from '../progress';
import { Grid } from '../grid';
import PropTypes from 'prop-types';

export const computeAreasCount = (totalTiles, columns, rows) =>
  Math.ceil(totalTiles / Math.max(columns * rows, 1));

export const Carousel = ({ mobile, cursor, columns, rows, data }) => {
  if (mobile) {
    columns = 1;
  }

  const areasCount = computeAreasCount(data.length, columns, rows);
  const avoidDivisionByZero = Math.max(areasCount, 1);
  const percentage = ((cursor + 1) * 100) / avoidDivisionByZero;

  const gridProps = {
    currentArea: cursor,
    columns,
    rows,
    tiles: data,
  };
  return (
    <Container columns={columns}>
      <Header>header</Header>
      <Content>
        <Grid {...gridProps} />
      </Content>
      <Progress percentage={percentage} />
      <Footer>footer</Footer>
    </Container>
  );
};

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  cursor: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  mobile: PropTypes.bool,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow: hidden;
`;

const Header = styled.div`
  background: #333;
  color: white;
  height: 50px;
`;

const Content = styled.div`
  background: #333;
  color: white;
  height: calc(100% - 100px);
`;

const Footer = styled.div`
  background: #333;
  color: white;
  height: 50px;
`;
