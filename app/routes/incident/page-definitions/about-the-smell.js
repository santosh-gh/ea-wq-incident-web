module.exports = {
  components: [
    {
      type: 'RadiosField',
      name: 'smellStrength',
      title: 'How strong is the smell',
      options: {
        list: {
          type: 'string',
          items: [
            { value: 'no smell', text: 'no smell' },
            { value: 'very weak smell', text: 'very weak smell' },
            { value: 'distinct smell that may make your hair or clothes smell', text: 'distinct smell that may make your hair or clothes smell' },
            { value: 'distinct smell you notice while walking and breathing normally', text: 'distinct smell you notice while walking and breathing normally' },
            { value: 'strong smell that may make your hair or clothes smell', text: 'strong smell that may make your hair or clothes smell' },
            { value: 'very strong smell that makes you want to leave the area', text: 'very strong smell that makes you want to leave the area' },
            { value: 'extremely strong or intolerable smell that makes you hold your breath and leave the area', text: 'extremely strong or intolerable smell that makes you hold your breath and leave the area' }
          ]
        }
      }
    }
  ]
}
