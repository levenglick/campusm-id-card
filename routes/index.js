var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getUserPicture', function(req, res, next){
  const user = req.params.user;
  const photo = {
    photo: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg"
  };
  if(user) {
    console.log('user');
    photo.photo = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg';
  }
  res.json(photo);
});

module.exports = router;
