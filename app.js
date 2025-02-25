const express = require('express');
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

            let token = jwt.sign({email}, "asdfjkl;");
            res.cookie("jwt", token);

            // res.send(createdUser);
            res.redirect('/login');
        });
    });
    
    });

    app.get('/login', (req, res) => {
        res.render("login")
         });

    app.post('/login', (req, res) => {
        let { email, password } = req.body;
        userModel.findOne({ email }, (err, user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        let token = jwt.sign({email}, "asdfjkl;");
                        res.cookie("jwt", token);
                        res.send('User is authenticated');
                        // res.redirect('/');
                    }
                    else {
                        res.send("Password is incorrect");
                    }
                }
                );
            }
            else {
                res.send("User not found");
            }
        });
         });
         
    app.get('/logout', (req, res) => {
       res.clearCookie("jwt");
       res.redirect('/');
        });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });