import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
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
        const { values: {userLogin, userPassword, firstName, lastName, userMI, dob, ssn, address1, address2, city, state, zip, phone, email} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem
                            primaryText="Username"
                            secondaryText={ userLogin }
                        />
                        <ListItem
                            primaryText="Password"
                            secondaryText={ userPassword }
                        />
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstName }
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        />
                        <ListItem
                            primaryText="MI"
                            secondaryText={ userMI }
                        />
                        <ListItem
                            primaryText="DOB"
                            secondaryText={ dob }
                        />
                        <ListItem
                            primaryText="Last 4 of SSN"
                            secondaryText={ ssn }
                        />
                        <ListItem
                            primaryText="Address Line 1"
                            secondaryText={ address1 }
                        />
                        <ListItem
                            primaryText="Address Line 2"
                            secondaryText={ address2 }
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={ city }
                        />
                        <ListItem
                            primaryText="State"
                            secondaryText={ state }
                        />
                        <ListItem
                            primaryText="Zipcode"
                            secondaryText={ zip }
                        />
                        <ListItem
                            primaryText="Mobile Phone"
                            secondaryText={ phone }
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={ email }
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;