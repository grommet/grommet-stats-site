import 'whatwg-fetch';
import { polyfill as promisePolyfill } from 'es6-promise';

import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './Dashboard';

promisePolyfill();

const element = document.getElementById('content');
ReactDOM.render(<Dashboard />, element);

document.body.classList.remove('loading');
