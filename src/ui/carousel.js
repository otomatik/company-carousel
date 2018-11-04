import React, { Component } from 'react';
import styled from 'styled-components';

export const Carousel = ({ mobile }) => (
  <Container>carousel {mobile ? 'mobile' : ''}</Container>
);

const Container = styled.div``;
