import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // Send data to API here
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {      
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Your user Profile has been created</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

// const styles = {
//     button: {
//         margin: 15
//     }
// }

export default Success;