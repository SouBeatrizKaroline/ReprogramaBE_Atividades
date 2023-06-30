const express = require("express"); //importo o express

const app = express();

app.use(express.json());

const podRoutes = require("./routes/podcastsRoutes");

app.use("/podcasts", podRoutes);

const songsRoutes = require("./routes/songsRoutes");

app.use("/playlist", songsRoutes);

module.exports = app;