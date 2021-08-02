import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    
                    <TextField
                        hintText="Enter your Date of Birth"
                        floatingLabelText="Date of Birth"
                        onChange={handleChange('dob')}
                        defaultValue={values.dob}
                    />
                    <br/>
                    <TextField
                        hintText="Last 4 of SSN"
                        floatingLabelText="Last 4 of SSN"
                        onChange={handleChange('ssn')}
                        defaultValue={values.ssn}
                    />
                    <br/>
                    <TextField
                        hintText="Address Line 1"
                        floatingLabelText="Address Line 1"
                        onChange={handleChange('address1')}
                        defaultValue={values.address1}
                    />
                    <br/>
                    <TextField
                        hintText="Address Line 2"
                        floatingLabelText="Address Line 2"
                        onChange={handleChange('address2')}
                        defaultValue={values.address2}
                    />
                    <br/>
                    <TextField
                        hintText="City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                        hintText="State"
                        floatingLabelText="State"
                        onChange={handleChange('state')}
                        defaultValue={values.state}
                    />
                    <br/>
                    <TextField
                        hintText="Zipcode"
                        floatingLabelText="Zipcode"
                        onChange={handleChange('zip')}
                        defaultValue={values.zip}
                    />
                    <br/>
                    <TextField
                        hintText="Mobile Phone Number"
                        floatingLabelText="Mobile Phone Number"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                    />
                    <br/>
                    <TextField
                        hintText="Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
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

export default FormPersonalDetails