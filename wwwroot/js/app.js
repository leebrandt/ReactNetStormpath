import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import '../scss/site.scss';

render(
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/contact" component={ContactPage}/>    
  </Router>,
  document.getElementById('app')
)
