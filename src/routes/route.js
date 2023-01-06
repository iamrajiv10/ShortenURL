const express = require('express');
const { shortUrl, getUrl } = require('../Controllers/urlController');
const router = express.Router();

router.get("/test-me", function (req, res) {
    return res.send({ message: "my first ever api" })
})


router.post("/url/shorten", shortUrl)

router.get("/:urlCode", getUrl)


router.all('/*', function (req, res) {
    res.status(404).send({ status: false, message: 'path not found' })
})


module.exports = router