const routes = require('express').Router();
const getWordsValidator = require('../validators').getWords;

routes.get('/predictedWords/:phrase_code', getWordsValidator, require('./getPredictedWords'))

module.exports = routes
