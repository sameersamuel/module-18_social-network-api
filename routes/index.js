const router = require('express').Router();

router.route('/').get(getUser).post(newUser);