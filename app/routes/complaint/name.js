const sessionHandler = require('../../services/session-handler')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/complaint/name',
    handler: {
      'hapi-govuk-question-page': {
        getConfig: () => {
          return {
            $VIEW$: { serviceName: 'Environment Agency Incident Form' }
          }
        },
        getData: (request) => sessionHandler.get(request, 'complaint'),
        getNextPath: () => './address',
        pageDefinition: require('./page-definitions/name')
      }
    },
    options: require('./question-page-options')
  }
]
