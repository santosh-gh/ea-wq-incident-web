const sessionHandler = require('../services/session-handler')

function ViewModel (complaint) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    titleText: 'Application complete',
    html: 'Your reference number<br><strong>EA12345</strong>'
  }

  this.complaint = complaint
}

module.exports = {
  method: 'GET',
  path: '/confirmation',
  options: {
    handler: (request, h) => {
      const complaint = sessionHandler.get(request, 'complaint')
      return h.view('confirmation', new ViewModel(complaint))
    }
  }
}
