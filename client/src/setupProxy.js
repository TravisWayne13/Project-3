const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/comments", "/api"], { target: "http://localhost:3001" })
  );
};