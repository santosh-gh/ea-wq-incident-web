module.exports = {
  submitButtonText: 'Save and continue',
  components: [
    {
      type: 'MultilineTextField',
      name: 'location',
      title: 'Where did you notice this odour?',
      hint: 'Provide as much detail as possible',
      titleForError: 'location',
      options: { rows: 5 }
    }
  ]
}
