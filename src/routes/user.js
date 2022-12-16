const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth')
const { getAllUser, getProfile, register, loginUser, updateProfile } = require('../controllers/user');

router.get('/', getAllUser);
router.post('/', register);
router.get('/profile', protect, getProfile);
router.post('/login', loginUser);
router.put('/update', protect, updateProfile);

module.exports = router