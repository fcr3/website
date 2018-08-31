import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import '../styles/articlepage.css';
import {getData} from '../redux/actions';

class ArticlePage extends Component {
  render() {
    return (
      <div className="articlepage">
        <Link className="backbutton" to="/resume">
          Back
        </Link>
        <div className="article">
          <div className="articleheader justo">
            <h1 className="articleTitle">The Just Coffee Movement</h1>
          </div>
          <div className="articledescription">
            Cafe Justo was one of the first times that I
            had the opportunity explore my entreprenuerial side.
            My friend and I went to Agua Prieta, Mexico on an
            immersion trip to learn about issues surrounding
            the border. We got to meet many wonderful people,
            especially those who work for the official Cafe
            Justo in Mexico. They pride themselves on promoting
            fair trade, great coffee, and family. <br/> <br/>

            Grand opening is on May 4, 2018 at La Salle Prep!!!
          </div>
        </div>
        <div className="article">
          <div className="articleheader beacon">
            <h1 className="articleTitle">The Way of the Beacon</h1>
          </div>
          <div className="articledescription">
            Over the summer of 2018, I had the opportunity to with beacon technology, specifically
            Estimote Proximity beacons. With a little bit of elbow grease (learning swift, react, redux,
            design principles, firebase, etc.), I was able to create a proof-of-concept way finding
            application. <br/><br/>
            Beacons themselves are insanely simple, yet I believe that they have such tremendous potential
            when it comes to making spaces interactive for those who visit and for those who live within.
            Playing with these beacons illustrated to me how IoT in general is a booming field that
            really speaks to my interests, and it should speak to yours as well.
          </div>
        </div>
        <div className="article">
          <div className="articleheader vr">
            <h1 className="articleTitle">Views from the Headset</h1>
          </div>
          <div className="articledescription">
            Also over the summer, I was able to implement VR technology within the workflow of the engineering
            firm that I was interning for. I did the research, and from my findings, there is not many
            products that aid architects and engineers in their endeavours. From other Revit-ers who
            pay attention to news surrounding Autodesk programs interfacing with VR, there will be more to come.
            But we just have to be patient. <br/><br/>
            To my knowledge, Enscape and Fuzor are the juggernauts when it comes to using VR practically in
            construction. Enscape offers a quick rendering of Revit models, while Fuzor offers the ability
            to collaborate in VR. I found that multiple licenses of Enscape and one license of Fuzor will be
            enough to meet the needs of companies nowadays. That being said, there is defintely more work to be done.
            Super excited!
          </div>
        </div>
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
