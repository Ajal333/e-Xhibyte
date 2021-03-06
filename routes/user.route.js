const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/',   userController.viewProfile);
router.get('/edit', userController.showEditProfile);
router.post('/edit',  userController.editProfile);
router.get('/delete', userController.showDeleteProfile);

module.exports = router;