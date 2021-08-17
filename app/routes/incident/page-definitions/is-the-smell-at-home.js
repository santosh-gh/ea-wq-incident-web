module.exports = {
  components: [
    {
      type: 'RadiosField',
      name: 'smellAtHome',
      title: 'Are you experiencing this smell at your home address',
      options: {
        list: {
          type: 'string',
          items: [
            { value: 'Yes', text: 'Yes' },
            { value: 'No', text: 'No' }
          ]
        }
      }
    }
  ]
}
