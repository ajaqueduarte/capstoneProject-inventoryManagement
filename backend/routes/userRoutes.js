const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController'); // Adjust the path as necessary

router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
