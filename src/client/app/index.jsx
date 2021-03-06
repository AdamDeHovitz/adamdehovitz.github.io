import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red100} from 'material-ui/styles/colors';
import React from 'react';
import {render} from 'react-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

import Education from './education.jsx'
import Experience from './experience.jsx'
import Extracurricular from './extracurricular.jsx'
import Tools from './tools.jsx'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();


class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {open: false};
  }
  render() {
  	return (
     <MuiThemeProvider>
        <div>
          <AppBar
            title={'Adam DeHovitz'}
            onLeftIconButtonTouchTap={() => this.setState({open: true})}
            iconElementRight={<FlatButton label="Open Resume" href="https://adamdehovitz.github.io/static/AdamDeHovitzResume.pdf"/>}
          />
          {/*
          <Drawer open={this.state.open}>
	          <MenuItem onTouchTap={() => this.setState({open: false})}>
	          	About Adam
	          </MenuItem>
	          <MenuItem onTouchTap={() => this.setState({open: false})}>
	          	Education and Coursework
	          </MenuItem>
	          <MenuItem onTouchTap={() => this.setState({open: false})}>
	          	Experience
	          </MenuItem>
	          <MenuItem onTouchTap={() => this.setState({open: false})}>
	          	Languages and Tools
	          </MenuItem>
        </Drawer>*/}
        <div className="cards">
        <Toolbar style={{backgroundColor:red100}}><ToolbarTitle text="this website is still under development"/></Toolbar>
	        <Card initiallyExpanded>
			    <CardHeader
				    title="About Me"
				    subtitle="Biography"
				    avatar="images/profile.png"
				    actAsExpander={true}
	      			showExpandableButton={true}
			    />
			    <CardText expandable={true}>
			      <p>
			      	I was raised in Brooklyn. Growing up I admired the way millions 
			      	of smaller parts worked togther to make a city the scale of New York thrive.
			      </p>
			      <p>
			      	My first formal experience with computer science was in my sophmore year at Stuyvesant High School. 
			      	I quickly grew invested in it, and particularly enjoyed leveraging software to
			      	build tools related to other fields I was passionate about, such as a historical quote
			      	generator or a diplomacy simulator set in the Napoleonic era.
			      </p>
			      <p>
			      	Since then I've matured my understanding of software engineering through college courses
			      	at Brown and summer jobs at a diverse array of places. I'm passionate about building 
			      	software to solve real world problems, such as my last summer 
			      	at <a href="https://www.sidewalklabs.com/">Sidewalk Labs</a> where I worked on a tool
			      	to help cities map their streets. Currently, I'm looking for a similarly meaningful internship
			      	at a tech company next summer.
			      </p>
			    </CardText>
			  </Card>
			  <Education/>
			  <Experience/>
			  <Extracurricular/>
			  <Tools/>
		  </div>
        </div>
      </MuiThemeProvider>)

  }
}

render(<App/>, document.getElementById('app'));