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

  constructor(props) {
    super(props);
    const { mobile, rows, data, autoplay, columns } = props;

    this.columns = mobile ? 1 : columns;

    this.areasCount = computeAreasCount(data.tiles.length, this.columns, rows);

    if (autoplay) {
      this.startAutoplay();
    }
  }

  componentWillUnmount() {
    this.stopAutoplay();
  }

  startAutoplay = () => {
    this.intervalId = setInterval(
      this.moveToTheRightCyclically,
      this.props.autoplayInterval
    );
  };

  stopAutoplay = () => clearInterval(this.intervalId);

  hasNotReachEnd = () => this.state.currentArea < this.areasCount - 1;

  moveToTheRightCyclically = () => {
    this.setState({
      currentArea: this.hasNotReachEnd() ? this.state.currentArea + 1 : 0,
    });
  };

  moveToTheRight = () => {
    if (this.hasNotReachEnd()) {
      this.setState({ currentArea: this.state.currentArea + 1 });
    }
  };

  moveToTheLeft = () => {
    const { currentArea } = this.state;
    const hasNotReachBeginning = currentArea > 0;
    if (hasNotReachBeginning) {
      this.setState({ currentArea: currentArea - 1 });
    }
  };

  handleNavigationClick = direction => () => {
    this.stopAutoplay();
    direction === 'left' ? this.moveToTheLeft() : this.moveToTheRight();
  };

  render() {
    const { currentArea } = this.state;
    const { rows, data } = this.props;
    const columns = this.columns;
    const { tiles } = data;
    const percentage = ((currentArea + 1) * 100) / this.areasCount;
    const gridProps = {
      currentArea,
      columns,
      rows,
      tiles,
    };
    const NavButton = ({ direction }) => (
      <li>
        <Navigation
          direction={direction}
          onClick={this.handleNavigationClick(direction)}
        />
      </li>
    );
    const Header = () => (
      <Bar>
        <Company>
          <Logo src={data.companyLogo} />
          <Name>{data.companyName}</Name>
        </Company>
        <NavigationButtons>
          <NavButton direction="left" />
          <NavButton direction="right" />
        </NavigationButtons>
      </Bar>
    );
    const Footer = () => (
      <Bar>
        <WTTJ />
        <OpenProfile href={data.wttjProfile}>Voir les offres</OpenProfile>
      </Bar>
    );
    return (
      <Container columns={columns}>
        <Header />
        <Content>
          <Grid {...gridProps} />
        </Content>
        <Progress percentage={percentage} />
        <Footer />
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
  font-family: Helvetica, sans-serif;
`;

const BarHeight = 50;
const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #333;
  color: white;
  height: ${BarHeight}px;
  padding: 0 10px;
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.img`
  height: 100%;
`;

const Name = styled.p`
  padding-left: 10px;
`;

const NavigationButtons = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;

  li {
    margin-left: 5px;
  }
`;

const Content = styled.div`
  background: #333;
  height: calc(100% - ${BarHeight * 2}px);
`;

const WTTJ = styled.div`
  height: 80%;
  width: 100px;
  background: url('https://cdn.welcometothejungle.co/wttj-front/assets/images/logos/wttj-long.svg?v=9d42bd524a64e8477f5e3a087b7add89')
    no-repeat center center;
  background-size: contain;
`;

const OpenProfile = styled.a`
  text-align: right;
  color: white;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: rgb(0, 194, 154);
  }
`;
