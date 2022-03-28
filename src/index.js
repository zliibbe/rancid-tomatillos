import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './components/App';

const router = 
  <Router> 
    <React.StrictMode> 
      <App /> 
    </React.StrictMode> 
  </Router>

ReactDOM.render(router, document.getElementById('root'));

