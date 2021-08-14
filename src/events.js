import axios from 'axios';

const events = {};

// Server Test.
events.server = () => {

    return axios({
        url: 'http://localhost:9000/api/server',
        method: 'GET'
    }).then(res => {
        return res
    }).catch(err => {
        return err
    });
}

// Account Calls:
events.account = {};

// Create an account.
events.account.register = (props) => {

    const timestamp = events.timestamp();

    return axios({
        url: 'http://localhost:9000/api/account/register',
        method: 'POST',
        data: { 
            username: props.username.trim(),
            password: props.password.trim(),
            first_name: props.first_name.trim(),
            last_name: props.last_name.trim(),
            mid_init: props.mid_init.trim(),
            dob: props.dob.trim(),
            ssn: props.ssn.trim(),
            address_1: props.address_1.trim(),
            address_2: props.address_2.trim(),
            city: props.city.trim(),
            state: props.state.trim(),
            zip: props.zip.trim(),
            phone: props.phone.trim(),
            email: props.email.trim(),
            last_updated: timestamp
        }
    }).then(res => { 
        return res
    }).catch(err => { 
        return err
    });
}

// Log in to an account.
events.account.login = (props) => {

    return axios({
        url: 'http://localhost:9000/api/account/login',
        method: 'POST',
        data: { 
            username: props.username, 
            password: props.password
        }
    }).then(res => {
        return res
    }).catch(err => {
        return err
    });
}

// Delete an account.
events.account.delete = (props) => {

    return axios({
        url: 'http://localhost:9000/api/account/login',
        method: 'POST',
        data: { 
            id: props.id, 
            username: props.username, 
            password: props.password
        }
    }).then(res => {
        return res
    }).catch(err => {
        return err
    });
}

events.timestamp = () => {
    const now = new Date(),
        twoDigits = d => {
            if(0 <= d && d < 10) return "0" + d.toString();
            if(-10 < d && d < 0) return "-0" + (-1*d).toString();
            return d.toString();
        };

    return now.getUTCFullYear() + "-" + twoDigits(1 + now.getUTCMonth()) + "-" + twoDigits(now.getUTCDate()) + " " + twoDigits(now.getUTCHours()) + ":" + twoDigits(now.getUTCMinutes()) + ":" + twoDigits(now.getUTCSeconds());
}

export default events;