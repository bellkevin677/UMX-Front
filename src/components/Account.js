import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import events from '../events';
import Login from './Login';
import Card from './Card';


class Account extends Component {

    render() {      
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Account" />
                    <br/>
                    <RaisedButton
                        label="Records"
                        primary={true}
                        style={styles.button}
                        onClick={() => {
                            setAppState({ display: 'Records' })
                        }}
                    />
                    <br/>
                    <RaisedButton
                        label="Edit Records"
                        primary={true}
                        style={styles.button}
                        onClick={() => {
                            setAppState({ display: 'Review Records' })
                        }}
                    />
                    <br/>
                    <RaisedButton
                        label="Edit Account"
                        primary={true}
                        style={styles.button}
                        onClick={() => {
                            setAppState({ display: 'Edit Account' })
                        }}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Account;