import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const {
            setAppState
        } = this.props, { 
            step, 
            userLogin, 
            userPassword, 
            firstName, 
            lastName, 
            userMI, 
            dob, 
            ssn, 
            address1, 
            address2, 
            city, 
            state, 
            zip, 
            phone, 
            email 
        } = this.state,
        values = { 
            userLogin, 
            userPassword, 
            firstName, 
            lastName, 
            userMI, 
            dob, 
            ssn, 
            address1, 
            address2, 
            city, 
            state, 
            zip, 
            phone, 
            email 
        };
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        setAppState={setAppState}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        setAppState={setAppState}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        setAppState={setAppState}
                        values={values}
                    />
                );
            case 4:
                return <Success />;
            default:
        }
    }
}

export default UserForm;
