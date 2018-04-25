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
  req.checkParams('phrase_code')
    .exists().withMessage('phrase_code param is required')
    .isInt().withMessage('phrase_code should be a number')
  req.checkQuery('list_length').exists()
    .isInt().withMessage('list_length should be a number')
}

module.exports.getWords = validationErrorHandler(getWordsValidator)