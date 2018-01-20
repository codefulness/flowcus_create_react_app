import React from 'react';

import { storiesOf } from '@storybook/react';
// import '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import Provider from './Provider';
import configureStore from '../configureStore';
import initialState from '../initialState';
const store = configureStore(initialState);
const { dispatch } = store

import {
  SignWithFacebookButton
} from '../components'
const createSingingWithFacebookRequest = () => ({
  type: 'SING_IN_WITH_FACEBOOK_REQUEST'
})
storiesOf('User Sign In', module)
  .add('Sign in with facebook', props => <SignWithFacebookButton onClick={action('createSingingWithFacebookRequest')} />);
