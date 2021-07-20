const sessionHandler = require('../../services/session-handler')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/complaint/experience',
    handler: {
      'hapi-govuk-question-page': {
        getConfig: () => {
          return {
            $VIEW$: { serviceName: 'Environment Agency Incident Form' }
          }
        },
        getData: (request) => sessionHandler.get(request, 'complaint'),
        getNextPath: () => './location',
        pageDefinition: require('./page-definitions/experience')
      }
    },
    options: require('./question-page-options')
  }
]
