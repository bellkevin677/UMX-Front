import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        hintText="Enter your desired Username"
                        floatingLabelText="Desired Username"
                        onChange={handleChange('userLogin')}
                        defaultValue={values.userLogin}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange={handleChange('userPassword')}
                        defaultValue={values.userPassword}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your Middle Initial"
                        floatingLabelText="Middle Initial"
                        onChange={handleChange('userMI')}
                        defaultValue={values.userMI}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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
