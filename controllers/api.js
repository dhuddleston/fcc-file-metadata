var multer = require('multer');

module.exports = function(app){
    
    app.post('/', multer({dest:'./uploads/'}).single('uploader'), function(req,res){
    
    var byteSize = {bytesize: req.file.size};
    res.send(byteSize);
    
    });
    
};