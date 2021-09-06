module.exports = {
  method: 'GET',
  path: '/accessibility-statement',
  handler: {
    view: {
      template: 'accessibility-statement',
      context: { noIndex: false }
    }
  }
}
