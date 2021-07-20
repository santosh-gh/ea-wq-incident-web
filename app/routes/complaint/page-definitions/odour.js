module.exports = {
  submitButtonText: 'Save and continue',
  components: [
    {
      type: 'SelectField',
      name: 'odour',
      title: 'How would you rate the odour based on the descriptions below?',
      hint: 'How does it smell?',
      titleForError: 'Odour rating',
      options: {
        list: {
          name: 'odourList',
          type: 'string',
          items: [
            { text: 'No odour', value: '0' },
            { text: 'Very weak', value: '1' },
            { text: 'Weak', value: '2' },
            { text: 'Distinct', value: '3' },
            { text: 'Strong', value: '4' },
            { text: 'Very Strong', value: '5' },
            { text: 'Extremely Strong', value: '6' }
          ]
        }
      }
    }
  ]
}
