const sessionHandler = require('../../services/session-handler')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/complaint/address',
    handler: {
      'hapi-govuk-question-page': {
        getConfig: () => {
          return {
            $VIEW$: { serviceName: 'Environment Agency Incident Form' },
            $PAGE$: { title: 'Your Address' }
          }
        },
        getData: (request) => sessionHandler.get(request, 'complaint'),
        getNextPath: () => './odour',
        pageDefinition: require('./page-definitions/address')
      }
    },
    options: require('./question-page-options')
  }
]
