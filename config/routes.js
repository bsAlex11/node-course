"use strict"

module.exports = {
  initRoutes: initRoutes
}

const path = require('path');

function initRoutes(app) {
  const routesPath = path.join(__dirname, '../app/routes');
  const routes = ['users', 'teams'];

  routes.forEach((route => {
    console.log(route, 'route');
    app.use(require(`${routesPath}/${route}`));
  }));
}
