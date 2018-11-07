import React, { Component } from 'react';
import styled from 'styled-components';
import { Progress } from '../progress';
import { Grid } from '../grid';
import PropTypes from 'prop-types';
import { Navigation } from '../button';

export const computeAreasCount = (totalTiles, columns, rows) =>
  Math.ceil(totalTiles / Math.max(columns * rows, 1));

export class Carousel extends Component {
  static defaultProps = {
    rows: 1,
    columns: 1,
    autoplay: false,
    autoplayInterval: 3000,
  };

  state = {
    currentArea: 0,
  };

  hasNotManuallyMoved = true;

  constructor(props) {
    super(props);
    const { mobile, rows, data, autoplayInterval, autoplay, columns } = props;

    this.columns = mobile ? 1 : columns;

    this.state.areasCount = computeAreasCount(
      data.tiles.length,
      this.columns,
      rows
    );

    if (autoplay) {
      this.intervalId = setInterval(
        this.moveToTheRightIndefinitely,
        autoplayInterval
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  moveToTheRightIndefinitely = () => {
    if (this.hasNotManuallyMoved) {
      this.moveToTheRightCyclically();
    }
  };

  hasNotReachEnd = () => this.state.currentArea < this.state.areasCount - 1;

  moveToTheRightCyclically = () => {
    this.setState({
      currentArea: this.hasNotReachEnd() ? this.state.currentArea + 1 : 0,
    });
  };

  moveToTheRight = () => {
    this.hasNotManuallyMoved = false;
    if (this.hasNotReachEnd()) {
      this.setState({ currentArea: this.state.currentArea + 1 });
    }
  };

  moveToTheLeft = () => {
    this.hasNotManuallyMoved = false;
    const { currentArea } = this.state;
    const hasNotReachStart = currentArea > 0;
    if (hasNotReachStart) {
      this.setState({ currentArea: currentArea - 1 });
    }
  };

  render() {
    const { currentArea, areasCount } = this.state;
    const { rows, data } = this.props;
    const columns = this.columns;
    const { tiles } = data;
    const percentage = ((currentArea + 1) * 100) / areasCount;
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
          <Navigation direction="right" onClick={this.moveToTheRight} />
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
  autoplay: PropTypes.bool,
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
