const LabelController = require('../controllers/othername.controller');


module.exports = (app) =>{
    app.get('/api/label', LabelController.FindallLabels);
    app.get('/api/label/:id', LabelController.FindOneLabel);
    app.post('/api/label', LabelController.CreateNewLabel);
    app.put('/api/label/:id', LabelController.UpdateExistingLabel);
    app.delete('/api/label/:id', LabelController.DeleteExistingLabel);
    
}