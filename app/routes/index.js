const routes = require('express').Router();
const getWordsValidator = require('../validators').getWords;

routes.get('/predictedWords/:phrase_letters/:phrase_length', getWordsValidator, require('./getPredictedWords'))

module.exports = routes
