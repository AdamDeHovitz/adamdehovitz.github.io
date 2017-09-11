import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import React from 'react';


class Extracurricular extends React.Component {
 constructor(props) {
    super(props);
  }
  render() {
  	return (
	  <Card>
	    <CardHeader
		    title="Extracurriculars"
		    subtitle="Teaching Assistant and Club activities"
		    avatar="images/un.jpg"
		    actAsExpander={true}
  			showExpandableButton={true}
	    />
	    <CardText expandable={true}>
	    <h3> CS Teaching Assistant </h3>
	      <p>
	      	Last semester I TAed for <a href="http://cs.brown.edu/courses/cs0320/">Intro to Software Engineering</a>. 
	      	I had responsibilities such as writing course materials, holding office hours, and grading. My favorite part 
	      	was mentoring two student groups as they developed their final projects.
	      </p>
	      <p>
	      	This semester I am TAing for <a href="https://cs.brown.edu/courses/cs173/2017/">Design and Implementation of Programming Languagues</a>.
	      	My responsibilities are similar and include writing course documents, holding office hours, and grading. I enjoy the opportunity
	      	to teach material that I'm passionate about.
	      </p>
	      <Divider/>
	      <h3> Model UN </h3>
	      <p>
	      	My largest none-CS commitment at Brown is to Model UN. This includes competing in conferences and being active at meetings, but the largest
	      	amount of work comes from runninng our two conferences.
	      </p>
	      <p>
	      	I've held multiple jobs at <a href="https://busun.org/">BUSUN</a>, our largest conference with almost a thousand high school delegates,
	      	 including director, Crisis Manager, Director of Technology, and currenty Director of Crisis. As Director of Technology I was in charge of developing  
	      	 and/or maintaining the website and tools we use to do things from assigning delegates positions to taking attendance. 
	      	 As Director of Crisis I oversee the Crisis department which consistents of 4 groupings of 11 coordinated committees, each with their own team
	      	 of staff the enables us to run fun and engaging Model UN committees.
	      </p>
	      <p> I've also done a lot of work for BUCS, our smaller college conference. There I did similar jobs including Director of Technology and Undersecrtary General (USG).
	      as USG, I oversaw the development and running of 6 different committees.</p>
	      <Divider/>
	      <h3> And More </h3>
	      <p>
	      	I've also found other ways to spend my time at Brown including enrolling in Brown's <a href="http://brownentrepreneurship.com/dojo/">Innovation Dojo</a> and being
	      	an active member of the Beta Rho Pi fraternity.
	      </p>
	    </CardText>
	  </Card>)

  }
}

export default Extracurricular;
