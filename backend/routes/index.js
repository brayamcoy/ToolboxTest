const appRoutes = require('./app')

const routes = (app) => {
  app.use('/', appRoutes)
}

module.exports = routes
