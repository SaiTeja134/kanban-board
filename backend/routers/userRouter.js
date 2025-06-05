const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);                    // GET /users
router.get('/by-username', userController.getUserByUsername);           // GET /users?username=xyz
router.get('/:id', userController.getUserById);                // GET /users/:id
router.post('/', userController.registerUser);                // POST /users
router.put('/:id', userController.updateUser);                // PUT /users/:id
router.delete('/:id', userController.deleteUser);             // DELETE /users/:id

module.exports = router;
