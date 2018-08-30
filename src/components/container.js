import React from 'react';
import { spring, AnimatedSwitch } from 'react-router-transition';
import {Route} from 'react-router-dom';
import '../styles/container.css';

import HomePage from './homepage';
import ResumePage from './resumepage';
import ContactPage from './contactpage';
import ArticlePage from './articlepage';

function mapStyles(styles) {
  return {
    opacity: `${styles.opacity}`,
  };
}

function bounce(val) {
  return spring(val, {stiffness: 330,damping: 30,});
}

const pageTransitions = {
  atEnter: {
    opacity: 0,
  },
  atLeave: {
    opacity: bounce(0),
  },
  atActive: {
    opacity: 1,
  },
};

const Container = () => (
  <AnimatedSwitch
    {...pageTransitions}
    mapStyles={mapStyles}
    className="switch-wrapper"
  >
    <Route exact path="/" component={HomePage} />
    <Route exact path="/resume" component={ResumePage} />
    <Route exact path="/articles" component={ArticlePage} />
    <Route exact path="/contact" component={ContactPage} />
  </AnimatedSwitch>
);

export default Container;
