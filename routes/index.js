module.exports = app => {
  require('./commentRoutes.js')(app)
  require('./pollRoutes.js')(app)
  require('./userRoutes.js')
}