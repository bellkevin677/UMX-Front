import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import events from '../events';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // Send data to API here
        const { setAppState, values: {userLogin, userPassword, firstName, lastName, userMI, dob, ssn, address1, address2, city, state, zip, phone, email} } = this.props;

        events.account.register({
            username: userLogin,
            password: userPassword,
            first_name: firstName,
            last_name: lastName,
            mid_init: userMI,
            dob: dob,
            ssn: ssn,
            address_1: address1,
            address_2: address2,
            city: city,
            state: state,
            zip: zip,
            phone: phone,
            email: email
        }).then(res => {
            console.log(res);
            setAppState({ display: 'login' });
        }).catch(err => console.error(err));
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { setAppState, values: {userLogin, userPassword, firstName, lastName, userMI, dob, ssn, address1, address2, city, state, zip, phone, email} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <br/>
                    <RaisedButton
                        label="Register"
                        primary={true}
                        style={styles.button}
                        onClick={() => {
                            setAppState({ display: 'register' })
                        }}
                    />
                    <RaisedButton
                        label="Login"
                        primary={true}
                        style={styles.button}
                        onClick={() => {
                            setAppState({ display: 'login' })
                        }}
                    />
                    <br/>
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