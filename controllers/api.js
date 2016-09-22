var multer = require('multer');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.post('/', multer({dest:'./uploads/'}).single('upl'), function(req,res){
        
    console.log(req.file);
    res.send(req.file);
    
    });
    
};