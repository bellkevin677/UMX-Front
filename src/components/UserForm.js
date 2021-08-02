import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        userLogin: '',
        userPassword: '',
        firstName: '',
        lastName: '',
        userMI: '',
        dob: '',
        ssn: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: ''
    }

    // Go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { userLogin, userPassword, firstName, lastName, userMI, dob, ssn, address1, address2, city, state, zip, phone, email } = this.state;
        const values = { userLogin, userPassword, firstName, lastName, userMI, dob, ssn, address1, address2, city, state, zip, phone, email }
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return <Success />;
        }
    }
}

export default UserForm;
