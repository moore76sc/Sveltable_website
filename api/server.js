require('svelte/register');

const express = require("express");
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
const App = require('../src/App.svelte').default
const { html } = App.render({
  name: 'letconst'
})


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../assets')));

app.get('/documents',(req, res) => {//directs get requests for documents to document router
  return res.status(200).json({messages: res.locals.documents});
});


app.get('/', (req, res) => { //serves the app to user on initial load
  const indexFileContent = fs.readFileSync(path.resolve(__dirname, 'public', 'index.html'));
  res.send(indexFileContent.toString().replace('<div id="svelte_app"></div>', `<div id="svelte_app">${html}</div>`));
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


app.listen(8080, () => { //port listener
  console.log('Server listening on port 8080');
});