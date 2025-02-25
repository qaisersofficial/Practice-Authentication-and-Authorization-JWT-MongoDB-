const express = require('express');
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');

const port = 3000;

const cookieParser = require('cookie-parser');
const path = require('path');
const user = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.render("index");
    });

app.post('/create', (req, res) => {
    let { username, password, email, age} = req.body;

    bcrypt.genSalt(10, function(err, salt) {
        // console.log(salt);
        bcrypt.hash(password, salt, async function(err, hash) {
            let createdUser = await userModel.create({
                username,
                password: hash,
                email,
                age
            });
            res.send(createdUser);
        });
    });
    
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });