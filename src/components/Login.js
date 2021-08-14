import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import events from '../events';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        const {
            setAppState
        } = this.props, {
            username,
            password
        } = this.state;

        return <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details" />
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
                <TextField
                    type="text"
                    hintText="Username"
                    floatingLabelText="Username"
                    value={username}
                    onChange={event => this.setState({ username: event.target.value })}
                />
                <br/>
                <TextField
                    type="Password"
                    hintText="Password"
                    floatingLabelText="Password"
                    value={password}
                    onChange={event => this.setState({ password: event.target.value })}
                />
                <br/>
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={() => {
                        const inputUser = username.trim(),
                            inputPass = password.trim();

                        if (inputUser.length === 0 || inputPass.length === 0) return 
                        events.account.login({
                            username: username,
                            password: password
                        }).then(res => {
                            console.log(res);
                            setAppState({
                                acc: res
                            });
                        }).catch(err => console.error(err));
                    }}
                />
            </React.Fragment>
        </MuiThemeProvider>
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Login;