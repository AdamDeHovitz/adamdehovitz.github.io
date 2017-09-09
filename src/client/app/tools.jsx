import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import React from 'react';


class Tools extends React.Component {
 constructor(props) {
    super(props);
  }
  render() {
  	return (
	  <Card>
	    <CardHeader
		    title="Technical Skills"
		    subtitle="Languages and more"
		    avatar="images/java.png"
		    actAsExpander={true}
  			showExpandableButton={true}
	    />
	    <CardText expandable={true}>
	    <h3>Most Advanced</h3>
	      <p>
	      	Java, TypeScript
	      </p>
	      <Divider/>
	      <h3>Advanced</h3>
	      <p>
	      	JavaScript, <a href="https://cs.brown.edu/courses/cs173/2017/learning-pyret.html">Pyret</a>, Python, Swift
	      </p>
	      <Divider/>
	      <h3>Intermediate</h3>
	      <p>
	      	Go, C, HTML, CSS, PostgreSQL
	      </p>
	      <Divider/>
	      <h3>Beginner</h3>
	      <p>
	      	MongoDB, Scala, Apache Spark
	      </p>

	    </CardText>
	  </Card>)

  }
}

export default Tools;
