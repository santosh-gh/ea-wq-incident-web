function ViewModel (complaint) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    titleText: 'Application complete',
    html: 'Your reference number<br><strong>EA12345</strong>'
  }
}

module.exports = ViewModel
