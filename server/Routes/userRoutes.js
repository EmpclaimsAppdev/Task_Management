const express = require('express')
const { authUser , signupUser} = require('../controller/userController')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')

router.route("/login")
      .post(authUser);

router.route("/Signup")
      .post(signupUser);

// Project Section -> View_Project
router.route("/project")


module.exports = router;