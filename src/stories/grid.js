import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { Grid } from '../ui/grid';
import { tiles } from '../data';
import React from 'react';

export const gridStories = storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['grid'] })
  .add('default', () => (
    <GridContainer>
      <Grid
        tiles={tiles}
        columns={number('columns', 3)}
        rows={number('rows', 2)}
        currentArea={number('current area', 0)}
      />
    </GridContainer>
  ));

const GridContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
