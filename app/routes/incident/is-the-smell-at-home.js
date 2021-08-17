const sessionHandler = require('../../services/session-handler')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/is-the-smell-at-home',
    handler: {
      'hapi-govuk-question-page': {
        getConfig: () => {
          return {
            $PAGE$: { title: 'Where is the smell' }
          }
        },
        getData: (request) => sessionHandler.get(request, 'complaint'),
        getNextPath: request => {
          const { smellAtHome } = request.payload
          return smellAtHome === 'No' ? './where-is-the-smell' : './details-of-the-smell'
        },
        pageDefinition: require('./page-definitions/is-the-smell-at-home')
      }
    },
    options: require('./question-page-options')
  }
]
