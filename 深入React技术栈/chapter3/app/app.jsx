import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Profile from './profile';

const props = {
    name: 'bobo',
    age: 20
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Profile {...props} />, app);