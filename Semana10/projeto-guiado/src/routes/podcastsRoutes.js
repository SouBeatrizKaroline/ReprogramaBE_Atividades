const controller = require("../controllers/podcastsController");

const express = require("express");

const router = express.Router();

router.get("/library", controller.getAllPods);
router.get("/library/topic", controller.getTopics);
router.post("/add", controller.addPods);
router.patch("/update/:id", controller.atualizarPods);
router.delete("/delete/:id", controller.deletePods);

module.exports = router;