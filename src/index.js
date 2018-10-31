import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import "./styles/style.css"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
