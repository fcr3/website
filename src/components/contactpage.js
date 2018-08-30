import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import '../styles/contactpage.css';

class ContactPage extends Component {
  render() {
    return (
      <div>
        This is the ContactPage
      </div>
    )
  }
}

export default connect(() => {return {};}, {})(withRouter(props => <ContactPage {...props}/>));
