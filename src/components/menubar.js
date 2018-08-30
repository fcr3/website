import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../styles/menubar.css';

class MenuBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
        </nav>
      </div>
    )
  }
}

export default connect(() => {return {};}, {})(MenuBar);
