const controller = require("../controllers/songsController");

const express = require("express");

const router = express.Router();

router.get("/library", controller.getAllMusic);
router.get("/library/:id", controller.getMusic);
router.get("/artists", controller.getArtist);
router.post("/add", controller.addMusic);
router.put("/:id", controller.updateMusic);
router.delete("/delete/:id", controller.deleteMusic);
router.patch("/favorited/:id", controller.updateFav);

module.exports = router;

