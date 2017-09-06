import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Education extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {stepIndex: 1};
  	}

  	buildHighSchool() {
  		return (
  			<div>
  			<p> Stuyvesant High School Class of 2015 </p>
  			<p> Took 8 semesters of Computer Science include Software Development, Systems Programming, and Computer Graphics</p>
  			</div>
  		)
  	}
  	buildBrownUniversity() {
  		return (
  			<div>
  			<p> Brown University Class of 2019 </p>
  			<p> Computer Science Sci. B. Candidate 4.0/4.0 GPA </p>
  			<Table>
		    <TableHeader adjustForTextboxes={false} displaySelectAll={false}>
		      <TableRow>
		        <TableHeaderColumn>Semester</TableHeaderColumn>
		        <TableHeaderColumn>Computer Science Coursework</TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    <TableBody displayRowCheckbox={false}>
		      <TableRow>
		        <TableRowColumn>1</TableRowColumn>
		        <TableRowColumn>CS0190: Accelerated Introduction to Computer Science</TableRowColumn>
		        <TableRowColumn></TableRowColumn>
				<TableRowColumn></TableRowColumn>
		        <TableRowColumn></TableRowColumn>
		      </TableRow>
		      <TableRow>
		        <TableRowColumn>2</TableRowColumn>
		        <TableRowColumn>CS0320: Introduction to Software Engineering</TableRowColumn>
		        <TableRowColumn></TableRowColumn>
				<TableRowColumn></TableRowColumn>
		        <TableRowColumn></TableRowColumn>
		      </TableRow>
		      <TableRow>
		        <TableRowColumn>3</TableRowColumn>
		        <TableRowColumn>CS0330: Introduction to Computer Systems</TableRowColumn>
		        <TableRowColumn>CS1730: Design and Implementation of Programming Languages</TableRowColumn>
				<TableRowColumn></TableRowColumn>
		        <TableRowColumn></TableRowColumn>
		      </TableRow>
		      <TableRow>
		        <TableRowColumn>4</TableRowColumn>
		        <TableRowColumn>CS0220: Introduction to Discrete Structures and Probability</TableRowColumn>
		        <TableRowColumn>CS1380: Distributed Computer Systems</TableRowColumn>
				<TableRowColumn>CS1800: Cybersecurity and International Relations</TableRowColumn>
		        <TableRowColumn>CS1950Y: Logic for Systems</TableRowColumn>
		      </TableRow>
		      <TableRow>
		        <TableRowColumn>5*</TableRowColumn>
		        <TableRowColumn>CS1470: Deep Learning</TableRowColumn>
		        <TableRowColumn>CS1570: Design and Analysis of Programming Languages</TableRowColumn>
				<TableRowColumn>APMA1650: Statistical Interference</TableRowColumn>
		        <TableRowColumn></TableRowColumn>
		      </TableRow>
		    </TableBody>
		  </Table>
		  *Courses not yet finalized
  			</div>
  		)
  	}

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.buildHighSchool();
      case 1:
        return this.buildBrownUniversity();
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      	<Card>
		    <CardHeader
			    title="Education"
			    subtitle="Including Coursework"
			    avatar="images/brown.png"
			    actAsExpander={true}
      			showExpandableButton={true}
		    />
		    <CardText expandable={true}>
		        <Stepper linear={false} activeStep={stepIndex}>
		          <Step>
		            <StepButton onClick={() => this.setState({stepIndex: 0})}>
		              High School
		            </StepButton>
		          </Step>
		          <Step>
		            <StepButton onClick={() => this.setState({stepIndex: 1})}>
		              College
		            </StepButton>
		          </Step>
		        </Stepper>
		        <div style={contentStyle}>
		          {this.getStepContent(stepIndex)}
		        </div>
		    </CardText>
	  </Card>
    );
  }
}

export default Education;