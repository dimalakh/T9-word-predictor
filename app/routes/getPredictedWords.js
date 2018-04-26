const dictionary = require('./../dictionary');
const { BAD_REQUEST_ERROR } = require('../constants')
const { getMatchedWords } = require('../utils')

module.exports = (req, res) => {
  const { 
    params: { phrase_code },
    query: { list_length = 10 }
  } = req;
  const matchedWords = getMatchedWords(dictionary, phrase_code);
  const wordsList = matchedWords.splice(0, list_length)

  if (wordsList) {
    res.sendJSON(wordsList);
  } else {
    res.sendError(BAD_REQUEST_ERROR)
  }
}
