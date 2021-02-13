const express = require('express')
const db = require('./config/db')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const fs = require('fs')
const PORT = 8080

const app = express();
// Initializes the database
db();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

require('./routes/routes.js')(app, fs)

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})