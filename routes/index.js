const router = require('express').Router();
const LoginController = require('../controllers/LoginController');
const DataListController = require('../controllers/DataListController');
const AuthVerify = require('../middleware/AuthVerify');

router.post('/login', LoginController.login);
router.get('/data', DataListController.getDataList);

router.use((req, res) => {
    res.status(404).send('404 Not Found');
})

module.exports = router;