const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
	res.render('index', { title: 'BookedIn' });
});

router.get('/about_us', (req, res) =>{
	res.render('about_us');	
}
)

module.exports = router;