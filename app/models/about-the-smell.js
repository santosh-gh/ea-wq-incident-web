const joi = require('joi')
const { BaseViewModel, schemaOptions } = require('./form')

const STRENGTH_KEY = 'strength'
const STRENGTH_LABEL = 'How strong is the smell?'
const STRENGTH_ITEMS = [
  'No smell',
  'Very slight smell',
  'Slight smell',
  'Noticeable smell (a smell you notice while breathing normally)',
  'Distinct smell (a smell that might make your hair and clothes smell)',
  'Overwhelming smell (a smell that makes you want to leave the area)',
  'Intolerable smell (a smell that forces you to hold your breath and leave the area) '
]

const schema = joi.object().keys({
  [STRENGTH_KEY]: joi.string().label(STRENGTH_LABEL).allow(...STRENGTH_ITEMS).required()
}).options(schemaOptions).required()

class ViewModel extends BaseViewModel {
  constructor (data, err) {
    super(data, err)

    const strengthOptions = {
      items: STRENGTH_ITEMS.map(value => ({
        text: value,
        value: value,
        checked: value === this.data[STRENGTH_KEY]
      })),
      fieldset: {
        legend: {
          text: STRENGTH_LABEL
        }
      }
    }

    this.addField(STRENGTH_KEY, STRENGTH_LABEL, null, strengthOptions)
  }
}

module.exports = {
  schema,
  ViewModel
}
