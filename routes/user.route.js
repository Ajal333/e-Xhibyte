const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/',   userController.viewProfile);
router.get('/edit', userController.showEditProfile);
// router.post('/edit',userController.editProfile);
router.get('/editPass',userController.showEditPassword);
// router.post('/edit/pass',userController.editPassword);

module.exports = router;