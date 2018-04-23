const dictionary = require('./../dictionary');
const { BAD_REQUEST_ERROR } = require('../constants')

module.exports = (req, res) => {
  const { 
    params: { phrase_length, phrase_letters },
    query: { list_length = 10 }
  } = req;
  const searchRegexp = new RegExp(`\\b[${phrase_letters.toLowerCase()}]+\\b(?![,])`);
  const matchedWords = dictionary.filter(word => 
    searchRegexp.test(word) && word.length === +phrase_length
  );
  const wordsList = matchedWords.splice(0, list_length)

  if (wordsList) {
    res.sendJSON(wordsList);
  } else {
    res.sendError(BAD_REQUEST_ERROR)
  }
}
