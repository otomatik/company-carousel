import React, { Component } from 'react';
import styled from 'styled-components';
import { Progress } from '../progress';
import { Grid } from '../grid';
import PropTypes from 'prop-types';
import { Navigation } from '../button';

export const computeAreasCount = (totalTiles, columns, rows) =>
  Math.ceil(totalTiles / Math.max(columns * rows, 1));

export class Carousel extends Component {
  state = {
    currentArea: 0,
  };

  moveToTheRight = areasCount => () =>
    this.state.currentArea < areasCount - 1
      ? this.setState({ currentArea: this.state.currentArea + 1 })
      : null;

  moveToTheLeft = () =>
    this.state.currentArea > 0
      ? this.setState({ currentArea: this.state.currentArea - 1 })
      : null;

  render() {
    const { mobile, rows, data } = this.props;
    const { currentArea } = this.state;
    let columns = this.props.columns;
    const { tiles } = data;

    if (mobile) {
      columns = 1;
    }

    const areasCount = computeAreasCount(tiles.length, columns, rows);
    const avoidDivisionByZero = Math.max(areasCount, 1);
    const percentage = ((currentArea + 1) * 100) / avoidDivisionByZero;

    const gridProps = {
      currentArea,
      columns,
      rows,
      tiles,
    };
    return (
      <Container columns={columns}>
        <Header>
          <Navigation direction="left" onClick={this.moveToTheLeft} />
          <Navigation
            direction="right"
            onClick={this.moveToTheRight(areasCount)}
          />
        </Header>
        <Content>
          <Grid {...gridProps} />
        </Content>
        <Progress percentage={percentage} />
        <Footer>footer</Footer>
      </Container>
    );
  }
}

Carousel.propTypes = {
  data: PropTypes.object.isRequired,
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number,
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
  display: flex;
  flex-direction: row;
  align-items: center;
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
