const sessionHandler = require('../../services/session-handler')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/about-you',
    handler: {
      'hapi-govuk-question-page': {
        getConfig: () => {
          return {
            $PAGE$: { title: 'About you' }
          }
        },
        getData: (request) => sessionHandler.get(request, 'complaint'),
        getNextPath: () => './about-the-smell',
        pageDefinition: require('./page-definitions/about-you')
      }
    },
    options: require('./question-page-options')
  }
]
