const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

//app.use(express.static(path.resolve(__dirname, '../assets')));

app.get('/documents',(req, res) => {//directs get requests for documents to document router
  return res.status(200).json({messages: res.locals.documents});
});


app.get('/', (req, res) => { //serves the app to user on initial load
  res.status(200).sendFile(path.join(__dirname, '../views/index.html'));
}); 

app.use((req,res) => res.status(404).send('This is not the page you are looking for...'));//404 catch all message

app.use((err, req, res, next) => { //global error catch
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


const MONGO_URI = 'mongodb+srv://moore76sc:Tomoe288476!@cluster0.gqcrs.mongodb.net/Sweat_Tracker?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, { //connects to database
useNewUrlParser: true,
useUnifiedTopology: true,
dbName: 'Sveltable_docs'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

app.listen(8080, () => { //port listener
  console.log('Server listening on port 8080');
});