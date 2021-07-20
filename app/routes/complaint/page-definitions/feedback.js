module.exports = {
  submitButtonText: 'Save and continue',
  components: [
    {
      type: 'MultilineTextField',
      name: 'feedback',
      title: 'Would you like to provide any more feedback?',
      hint: 'Provide feedback',
      titleForError: 'feedback',
      options: { rows: 5 }
    }
  ]
}
