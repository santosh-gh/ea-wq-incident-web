const sessionHandler = require('../../services/session-handler')

const questionPageOptions = {
  ext: {
    onPostHandler: {
      method: async (request, h) => {
        if (request.app['hapi-govuk-question-page']) {
          const dataToSet = request.app['hapi-govuk-question-page'].data
          sessionHandler.update(request, 'complaint', dataToSet)
        }
        return h.continue
      }
    }
  }
}

module.exports = questionPageOptions
