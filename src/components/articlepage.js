import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import '../styles/articlepage.css';
import {getData} from '../redux/actions';

class ArticlePage extends Component {
  render() {
    return (
      <div>
        This is the ArticlePage
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    articles: reduxState.articles
  }
}

export default connect(mapStateToProps, {getData})(withRouter(props => <ArticlePage {...props}/>));
