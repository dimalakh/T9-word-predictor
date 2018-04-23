const validationErrorHandler = (validator) => {
  return (req, res, next) => {
    validator(req)
    const errors = req.validationErrors()
  
    if (errors) {
      res.sendError(errors)
    } else {
      next()
    }
  }
}

const getWordsValidator = req => {
  req.checkParams('phrase_letters')
    .exists().withMessage('phrase_letters param is required')
    .isAlpha().withMessage('phrase_letters should be a string')
  req.checkParams('phrase_length')
    .exists().withMessage('phrase_length param is required')
    .isInt().withMessage('phrase_length should be a number')
  req.checkQuery('list_length').exists()
    .isInt().withMessage('list_length should be a number')
}

module.exports.getWords = validationErrorHandler(getWordsValidator)