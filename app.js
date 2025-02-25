const express = require('express');
const app = express();
const userModel = require('./models/user');

const port = 3000;

const cookieParser = require('cookie-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.render("index");
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });