const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth')
const upload = require('../middlewares/upload')
const { getAllUser, getProfile, register, loginUser, updateProfile, deleteUserProfile } = require('../controllers/user');

router.get('/', getAllUser);
router.post('/', register);
router.get('/profile', protect, getProfile);
router.post('/login', loginUser);
router.put('/update', protect, upload.single('photo'), updateProfile);
router.delete('/:id', deleteUserProfile);

module.exports = router