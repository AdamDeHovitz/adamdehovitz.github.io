import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React from 'react';
import {render} from 'react-dom';

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
          />
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
        </Drawer>
        <div className="cards">
	        <Card>
			    <CardHeader
				    title="About Me"
				    subtitle="Biography"
				    avatar="images/profile.png"
				    actAsExpander={true}
	      			showExpandableButton={true}
			    />
			    <CardText expandable={true}>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			    </CardText>
			  </Card>
		  </div>
        </div>
      </MuiThemeProvider>)

  }
}

render(<App/>, document.getElementById('app'));