module.exports = {
  method: 'GET',
  path: '/privacy-notice',
  handler: {
    view: {
      template: 'privacy-notice',
      context: { noIndex: false }
    }
  }
}
