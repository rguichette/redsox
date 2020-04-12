const router = require('express').Router();


router.get('/signup', (req, res) => {
return 	res.send('signedup')
});


module.exports = router;