const routes = require('express').Router()

routes.get('/predictedWords/:phraseLetters/:phraseLength', require('./getPredictedWords'))

module.exports = routes
