import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as _ from 'underscore';

const experiences = ["Boston University RISE", "Morgan Stanley", "ALTR", "Sidewalk Labs", "Next"];

class Experience extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {stepIndex: 3};
	    this.handleNext = this.handleNext.bind(this);
	    this.handlePrev = this.handlePrev.bind(this);
  	}

  	buildBostonUniversity() {
  		return (
  			<div>
  			<p> Summer of 2014 I worked under Professor Swapnil Bhatia to develop a <a href="https://www.slideshare.net/AdamDeHovitz/adposterfinal">
  			hueristic algorithm</a> for mapping truth tables to 
  			<a href="http://www.nature.com/nmeth/journal/v11/n5/full/nmeth.2926.html?foxtrotcallback=true"> synthetic genetic circuits</a>.
  			</p>
  			</div>
  		)
  	}

  	buildMorganStanley() {
  		return (
  			<div>
  			<p> Summer of 2015 I worked with Morgan Stanley's Web Authentication Engineering Group to build features for client web access system. 
  				This included an email notification system for expiring authentication certificates.</p>
  			</div>
  		)
  	}

  	buildALTR() {
  		return (
  			<div>
  			<p> Starting May of 2016 until March of 2017 I worked for <a href="https://www.altr.com/">ALTR</a>, an information security start up. </p>
  			<p> I developed a Mac OS service to keep track of an ALTR application's state, iterated on a file management tool, and explored possible uses
  			for an Apache Spark based anomaly detection tool. </p>
  			<p> I worked full time over breaks and part time during the school year. </p>
  			</div>
  		)
  	}

  	buildSidewalk() {
  		return (
  			<div>
  			<p> Summer of 2017 I had an intership at <a href="http://www.flowmobility.io/">Flow Mobility</a>, a part of Alphabet's 
  			urban innovation arm <a href="https://www.sidewalklabs.com/">Sidewalk Labs</a>. </p>
  			<p>I implemented a React web application for quickly transcribing image data and storing the results in a postgres database. 
  			I deployed the application to <a href="https://www.mturk.com/mturk/welcome"> Amazon Mechanical Turk</a> and iterated on the design
  			to improve the reliability of worker transcriptions.</p>
  			</div>
  		)
  	}

  	buildNext() {
  		return (
  			<div>
  			<p> I am looking for a new opportunity to grow at a summer internship for 2018!</p>
  			</div>
  		)
  	}

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.buildBostonUniversity();
      case 1:
        return this.buildMorganStanley();
      case 2:
        return this.buildALTR();
      case 3:
      	return this.buildSidewalk();
      case 4: 
      	return this.buildNext();
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

   handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
    });
  };

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  buildNavigation() {
  	const isLast = this.state.stepIndex === 4;
  	return (<div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={this.state.stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={isLast ? 'Contact' : 'Next'}
                  primary={true}
                  href={isLast ? "https://mail.google.com/mail/?view=cm&fs=1&to=adam_dehovitz@brown.edu" : null }
                  onClick={isLast ? null : this.handleNext}
                />
                </div>)
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    const navigation = this.buildNavigation();

    return (
      	<Card>
		    <CardHeader
			    title="Experience"
			    subtitle="Work and Research"
			    avatar="images/sidewalk.png"
			    actAsExpander={true}
      			showExpandableButton={true}
		    />
		    <CardText expandable={true}>
		        <Stepper linear={false} activeStep={stepIndex}>
		        	{_.map(experiences, (experience, index) => 
		        		(<Step key={experience}>
				            <StepButton onClick={() => this.setState({stepIndex: index})}>
				              {experience}
				            </StepButton>
				          </Step>)
		        		)}
		        </Stepper>
		        <div style={contentStyle}>
		          {this.getStepContent(stepIndex)}
		          {navigation}
		        </div>
		    </CardText>
	  </Card>
    );
  }
}

export default Experience;