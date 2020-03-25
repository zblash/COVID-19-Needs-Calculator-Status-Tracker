import * as React from 'react';
import { render } from 'react-dom';
import './assets/scss/App.scss';
import App from './app';

const rootEl = document.getElementById('root');

render(<App />, rootEl);
