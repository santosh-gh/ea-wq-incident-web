const sessionHandler = require('../../services/session-handler')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/complaint/feedback',
    handler: {
      'hapi-govuk-question-page': {
        getConfig: () => {
          return {
            $VIEW$: { serviceName: 'Environment Agency Incident Form' }
          }
        },
        getData: (request) => sessionHandler.get(request, 'complaint'),
        getNextPath: () => './confirmation',
        pageDefinition: require('./page-definitions/feedback')
      }
    },
    options: require('./question-page-options')
  }
]
