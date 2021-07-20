const routes = [].concat(
  require('../routes/home'),
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/static'),
  require('../routes/complaint/name'),
  require('../routes/complaint/address'),
  require('../routes/complaint/odour'),
  require('../routes/complaint/experience'),
  require('../routes/complaint/location'),
  require('../routes/complaint/feedback'),
  require('../routes/complaint/confirmation'),
  require('../routes/cookies/cookies')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
