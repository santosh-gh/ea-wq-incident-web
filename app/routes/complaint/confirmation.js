const sessionHandler = require('../../services/session-handler')
const ViewModel = require('./models/confirmation')

module.exports = {
  method: 'GET',
  path: '/complaint/confirmation',
  options: {
    handler: (request, h) => {
      const complaint = sessionHandler.get(request, 'complaint')
      return h.view('complaint/confirmation', new ViewModel(complaint))
    }
  }
}
