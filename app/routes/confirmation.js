const sessionHandler = require('../services/session-handler')

module.exports = {
  method: 'GET',
  path: '/confirmation',
  options: {
    handler: async (request, h) => {
      const complaint = sessionHandler.get(request, 'complaint')

      // Return to the start if the data is invalid
      if (!complaint.emailSent) {
        return h.redirect('/')
      }

      // Clear the session state
      sessionHandler.reset(request)

      return h.view('confirmation')
    }
  }
}
