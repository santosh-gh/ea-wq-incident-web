const sessionHandler = require('../../services/session-handler')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/details-of-the-smell',
    handler: {
      'hapi-govuk-question-page': {
        getConfig: () => {
          return {
            $PAGE$: { title: 'Details of the smell' }
          }
        },
        getData: (request) => sessionHandler.get(request, 'complaint'),
        getNextPath: () => './confirmation',
        pageDefinition: require('./page-definitions/details-of-the-smell')
      }
    },
    options: require('./question-page-options')
  }
]
