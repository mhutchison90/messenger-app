// --IMPORTS--
require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, message_controller = require('./controllers/message_controller')


// --SETUP APP--
const app = express();
app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());

// --MASSIVE--
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

const path = require('path')
app.get('*', (req, res)=>{
res.sendFile(path.join(__dirname, '../build/index.html'));
})



// --SETUP APP TO LISTEN TO PORT--
const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
