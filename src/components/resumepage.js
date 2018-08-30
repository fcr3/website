import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import smile from '../assets/front.jpg';
import beacon from '../assets/front2.JPG';
import profile from '../assets/small.jpg';
import '../styles/resumepage.css';

class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
    this.state ={
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  resize() {
    console.log("change");
    this.setState({
      width: window.innerWidth,
      height: window.innherHeight
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    window.addEventListener("orientationchange", this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("orientationchange", this.resize);
  }

  render() {
    let leftClasses = ["left"];
    //let rightClasses = ["right"];
    let smallClasses = ["hide"];
    if (window.innerWidth < window.innerHeight || (window.innerWidth / window.innerHeight < 3/2)) {
      leftClasses.push("grow");
      //rightClasses.push("hide");
      smallClasses.push("show");
    }

    return (
      <div className="resumepage">
          <div className={leftClasses.join(" ")}>
            <div className="titleRes">Resume</div>
            <img className={smallClasses.join(" ")} src={profile} alt="p"/>
            <div className="subtitleRes">A web, mobile, software developer.</div>
            <div className="text">
              Designed with illustrator and photoshop. <br/>
              Created with react, html, css, swift, java, xml. <br/>
              Powered apps with node, mongo, express, firebase. <br/>
              Played with autocad, revit, beacons, vr.
            </div>
            <div className="text">
              A r&d intern for vr/beacon technology at reyes engineering. <br/>
              An ee intern at reyes engineering. <br/>
              A student intern at precision castparts.
            </div>
            <div className="text">
              A Berkeley EECS, IEEE, Kappa Sigma Bear. <br/>
              A LaSalle Valedictorian Falcon.
            </div>
            <div className="text">
              2650 Haste St., Berkeley, CA 94720 <br/>
              503-956-0008 <br/>
              fcreyes@berkeley.edu <br/>
              Github: @fcr3 <br/>
              Linked: @fcrIII
            </div>
            <div className="buttonsRes">
              <Link className="buttonRes" to="/">Home</Link>
              <Link className="buttonRes" to="/resume">TBD</Link>
              <Link className="buttonRes" to="/resume">TBD</Link>
            </div>
          </div>
          {window.innerWidth < window.innerHeight || (window.innerWidth / window.innerHeight < 3/2) ? null : (
          <div className="right">
            <img className="beaconResume" src={beacon} alt="b"/>
            <img className="smileResume" src={smile} alt="s"/>
          </div>)}
      </div>
    )
  }
}

export default connect(() => {return {};}, {})(withRouter(props => <ResumePage {...props}/>));
