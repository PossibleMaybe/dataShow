import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './common/reset.css';
import './common/common.css';
import './common/global.css';

import App from './App';

import './js/rem';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
