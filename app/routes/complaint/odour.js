const sessionHandler = require('../../services/session-handler')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/complaint/odour',
    handler: {
      'hapi-govuk-question-page': {
        getConfig: () => {
          return {
            $VIEW$: { serviceName: 'Environment Agency Incident Form' }
          }
        },
        getData: (request) => sessionHandler.get(request, 'complaint'),
        getNextPath: () => './experience',
        pageDefinition: require('./page-definitions/odour')
      }
    },
    options: require('./question-page-options')
  }
]
