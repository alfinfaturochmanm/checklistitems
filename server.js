const express = require("express");
const jwt = require("jsonwebtoken");

app = express();

require('./app/routes')(express);

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});
