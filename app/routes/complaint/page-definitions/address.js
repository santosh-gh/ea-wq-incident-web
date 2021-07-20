module.exports = {
  submitButtonText: 'Save and continue',
  components: [
    {
      type: 'TextField',
      name: 'Building',
      title: 'Building number or name',
      hint: 'The building number or name',
      titleForError: 'Building number or name',
      options: { classes: 'govuk-input--width-50' }
    },
    {
      type: 'TextField',
      name: 'Address line 1',
      title: 'Address line 1 (optional)',
      hint: 'The first line of your address',
      titleForError: 'Address line 1',
      options: { classes: 'govuk-input--width-50' }
    },
    {
      type: 'TextField',
      name: 'Address line 2',
      title: 'Address line 2 (optional)',
      hint: 'The second line of your address',
      titleForError: 'Address line 2',
      options: { classes: 'govuk-input--width-50' }
    },
    {
      type: 'TextField',
      name: 'Town or city',
      title: 'Town or city',
      hint: 'The town or city where you live',
      titleForError: 'Town or city',
      options: { classes: 'govuk-input--width-50' }
    },
    {
      type: 'TextField',
      name: 'Postcode',
      title: 'Postcode',
      hint: 'The postcode where you live',
      titleForError: 'Postcode',
      options: { classes: 'govuk-input--width-50' }
    }
  ]
}
