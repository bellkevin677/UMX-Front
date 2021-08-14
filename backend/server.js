const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mysql = require('mysql'),
    getSecret = require('./secret'),
    app = express(),
    port = 9000,
    router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/server', (req, res) => {

    const secret = getSecret('mySql'),
        connection = mysql.createConnection(secret);

    connection.connect(err => {
        if (err) throw err
        return res.send({
            message: 'Connected.'
        });
    });

    connection.end();
});

router.post('/account/register', (req, res) => {
    const { username, password, first_name, last_name, mid_init, dob, ssn, address_1, address_2, city, state, zip, phone, email, last_updated } = req.body,
        secret = getSecret('mySql'),
        connection = mysql.createConnection(secret);

    connection.query(`
        INSERT 
        INTO test.user 
        SET ?
    `, {
        username: username.trim(),
        password: password.trim(),
        first_name: first_name.trim(),
        last_name: last_name.trim(),
        mid_init: mid_init.trim(),
        dob: dob.trim(),
        ssn: ssn.trim(),
        address_1: address_1.trim(),
        address_2: address_2.trim(),
        city: city.trim(),
        state: state.trim(),
        zip: zip.trim(),
        phone: phone.trim(),
        email: email.trim(),
        last_updated: last_updated
    }, (err, result) => {
        if (err) throw err
        res.send({
            result: result
        });
    });

    connection.end();
});

router.post('/account/login', (req, res) => {
    const { username, password } = req.body,
        secret = getSecret('mySql'),
        connection = mysql.createConnection(secret);

    connection.query(`
        SELECT *
        FROM test.user 
        WHERE username REGEXP '${username}' AND password REGEXP '${password}'
    `, (err , result) => {
        if (err) throw err
        return res.send({
            acc: result[0]
        });
    });

    connection.end();
});

router.post('/account/delete', (req, res) => {
    const { id, username, password } = req.body,
        secret = getSecret('mySqlMulti'),
        connection = mysql.createConnection(secret);

    connection.query(`
        DELETE 
        FROM test.user 
        WHERE user_id REGEXP '${id}' AND username REGEXP '${username}' AND password REGEXP '${password}'
    `, (err, result) => {
        if (err) throw err
        res.send({
            result: result
        });
    });

    connection.end();
});

app.use(cors());
app.use('/api', router);
app.listen(port, () => console.log(`Listening on port: ${port}`));