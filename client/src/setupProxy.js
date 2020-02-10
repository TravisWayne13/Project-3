const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api", "/otherapi"], { target: "http://localhost:2998" })
  );
};