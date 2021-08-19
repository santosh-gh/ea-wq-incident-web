const sessionHandler = require('../../services/session-handler')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/where-is-the-smell',
    handler: {
      'hapi-govuk-question-page': {
        getConfig: () => {
          return {
            $PAGE$: { title: 'Where is the smell' }
          }
        },
        getData: (request) => sessionHandler.get(request, 'complaint'),
        getNextPath: () => './details-of-the-smell',
        pageDefinition: require('./page-definitions/where-is-the-smell')
      }
    },
    options: require('./question-page-options')
  }
]
