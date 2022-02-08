const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://moore76sc:Tomoe288476!@cluster0.gqcrs.mongodb.net/Sweat_Tracker?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, { //connects to database
useNewUrlParser: true,
useUnifiedTopology: true,
dbName: 'Sveltable_docs'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));
  
const documentSchema = new Schema({
  title: {
    type: String,
    required: true},
  body: {
    type: String,
    required: true}
});

const Document = mongoose.model('Document', documentSchema);



 module.exports = {
  Document
  };