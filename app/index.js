import React from 'react';
import ReactDOM from 'react-dom';
import VideoGrid from './components/VideoGrid.jsx';
import Navigation from './components/Navigation.jsx';

ReactDOM.render(<Navigation />, document.getElementById('navigation-container'));
ReactDOM.render(<VideoGrid />, document.getElementById('app-container'));