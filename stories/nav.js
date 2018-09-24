import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Nav from '../components/nav.tsx';

storiesOf('Nav', module)
  .add('base', () => (
    <Nav />
  ));
