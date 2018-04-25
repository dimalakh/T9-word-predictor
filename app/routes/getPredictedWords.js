const dictionary = require('./../dictionary');
const { BAD_REQUEST_ERROR } = require('../constants')
const { phraseDecode } = require('../utils')

module.exports = (req, res) => {
  const { 
    params: { phrase_code },
    query: { list_length = 10 }
  } = req;
  const phraseLettersCode = phraseDecode(phrase_code)
  const searchRegexp = new RegExp(`\\b[${phraseLettersCode.toLowerCase()}]+\\b(?![,])`);
  const matchedWords = dictionary.filter(word => 
    searchRegexp.test(word) && word.length === +phrase_code.length
  );
  const wordsList = matchedWords.splice(0, list_length)

  if (wordsList) {
    res.sendJSON(wordsList);
  } else {
    res.sendError(BAD_REQUEST_ERROR)
  }
}
