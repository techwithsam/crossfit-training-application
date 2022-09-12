const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.write("<html>");
  res.write("<head><title>Version 1</title><head>");
  res.write(`<h2>Hello from ${req.baseUrl}`);
  res.write("</html>");
  res.end();
});

module.exports = router;
