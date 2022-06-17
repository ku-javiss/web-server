const express = require("express");
const cors = require("cors");
const javissRoute = require("./routes/javiss");
const domainRoute = require("./routes/domain");
const app = express();
const PORT = process.env.PORT || 3001;
const SSLPORT = 8443;
const http = require('http')
const fs = require('fs')

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.set("trust proxy", true);

app.listen(PORT, () => {

});

app.get("/", function (req, res) {
  console.log("page loaded");
});

app.use("/javiss", javissRoute);
app.use("/domain", domainRoute);