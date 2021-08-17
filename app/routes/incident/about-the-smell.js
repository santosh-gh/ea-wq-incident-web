const sessionHandler = require('../../services/session-handler')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/about-the-smell',
    handler: {
      'hapi-govuk-question-page': {
        getConfig: () => {
          return {
            $PAGE$: { title: 'About the smell' }
          }
        },
        getData: (request) => sessionHandler.get(request, 'complaint'),
        getNextPath: () => './is-the-smell-at-home',
        pageDefinition: require('./page-definitions/about-the-smell')
      }
    },
    options: require('./question-page-options')
  }
]
