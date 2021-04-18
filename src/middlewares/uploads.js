const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req,file,cb){
        cb(null, new Date().toISOString() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(new Error('Type file not supported'), false);
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

module.exports = upload