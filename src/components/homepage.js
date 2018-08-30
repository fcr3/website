import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import vr from '../assets/vrfront3.jpg';
import '../styles/homepage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
          <img className="frontimg" src={vr} alt="vr"/>
          <div className="homeGreeting">
            <div className="title">Flaviano Christian Reyes</div>
            <div className="subtitle">Explore. Observe. Create.</div>
            <Link className="buttonHome" to="/resume">Welcome</Link>
          </div>
      </div>
    )
  }
}

export default connect(() => {return {};}, {})(withRouter(props => <HomePage {...props}/>));
