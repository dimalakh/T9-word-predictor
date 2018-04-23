const dictionary = require('./../dictionary');
const { BAD_REQUEST_ERROR } = require('../constants')

module.exports = (req, res) => {
  const { 
    params: { phraseLength, phraseLetters },
    query: { list_length }
  } = req;
  const searchRegexp = new RegExp(`\\b[${phraseLetters.toLowerCase()}]+\\b(?![,])`);
  const matchedWords = dictionary.filter(word => 
    searchRegexp.test(word) && word.length === +phraseLength
  );
  const wordsList = matchedWords.splice(0, list_length)

  if (wordsList) {
    res.sendJSON(wordsList);
  } else {
    res.sendError(BAD_REQUEST_ERROR)
  }
}
