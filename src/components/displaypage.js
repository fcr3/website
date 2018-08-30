import React from 'react';
import { spring, AnimatedSwitch} from 'react-router-transition';
import {Route} from 'react-router-dom';
import '../styles/displaypage.css';

import HomePage from './homepage';
import NavBar from './menubar';
import ResumePage from './resumepage';
import ContactPage from './contactpage';
import ArticlePage from './articlepage';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {stiffness: 330,damping: 22,});
}

const bounceTransition = {
  atEnter: {opacity: 1,scale: 1,},
  atLeave: {opacity: 0,scale: 1,},
  atActive: {opacity: 1,scale: 1,},
};

const DisplayPage = () => (
  <div>
  <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
  >
    <Route exact path="/" component={HomePage} />
    <Route exact path="/resume" component={ResumePage} />
    <Route exact path="/articles" component={ArticlePage} />
    <Route exact path="/contact" component={ContactPage} />
  </AnimatedSwitch>
  </div>
);

export default DisplayPage;
