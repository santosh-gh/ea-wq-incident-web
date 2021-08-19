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
        getData: (request) => {
          const data = sessionHandler.get(request, 'complaint')
          if (data.dateOfSmell) {
            data.dateOfSmell = new Date(data.dateOfSmell)
          }
          return data
        },
        // setData: async (request, data) => {
        //   const dateOfSmell = data.dateOfSmell
        //   if (dateOfSmell > new Date()) {
        //     return {
        //       errors: {
        //         titleText: 'Fix the following errors',
        //         errorList: [
        //           { href: '#dateOfSmell', name: 'dateOfSmell', text: 'Date has to be in the past' }
        //         ]
        //       }
        //     }
        //   }
        // },
        getNextPath: () => './confirmation',
        pageDefinition: require('./page-definitions/details-of-the-smell')
      }
    },
    options: require('./question-page-options')
  }
]
