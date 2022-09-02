const express = require('express');
const router = express.Router();

const cowinController = require("../controllers/cowinController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/cowin/getByDistrict", cowinController.getDistrictSession)

router.get("/allMemes",cowinController.getMemes)

router.post("/updatedMemes",cowinController.myMeme)

router.get("/temp",cowinController.weatherData)

module.exports = router;

