const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api", "/polls", "/comments", "/register", "login"], { target: "http://localhost:2998"})
  );
};