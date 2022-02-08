const models = require('../schemas/documentSchema.js');
const documentController = {};

documentController.getAllDocuments = async (req, res, next) => {
  try {
    res.locals.recentEvents = await models.Document.find({}).sort({_id:-1}); //retrieve all documents and stores in locals
    return next(); //send the events to front end via router
  } catch (error){
    return res.status(400).send(`Failed to get documents ${error}`);
  };
};

documentController.getOneDocument = async (req, res, next) => {
  try { 
    if(req.query.id){
      res.locals.oneDocument = await models.Document.find({ _id: req.query.id})//if an id is provided find document by id
    } else {
      res.locals.oneDocument = await models.Document.find(req.query)//if no id then find article by text search
    };
    return next();
  } catch (error){
      return res.status(400).send(`Failed to retrieve requested document ${error}`);
  };
};

module.exports = documentController;