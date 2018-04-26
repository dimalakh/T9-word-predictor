const phraseDecode = codes => {
    const letterCode = codes.split('').map(code => {
        switch (code) {
        case '2':
            return 'abc'
        case '3':
            return 'def'
        case '4':
            return 'ghi'
        case '5':
            return 'jkl'
        case '6':
            return 'mno'
        case '7':
            return 'pqrs'
        case '8':
            return 'tuv'
        case '9':
            return 'wxyz'
        default:
            return ''
    }
  })

  return letterCode.join('')
}

const getMatchedWords = (dictionary, phraseCode) => {
  const phraseLettersCode = phraseDecode(phraseCode)
  const searchRegexp = new RegExp(`\\b[${phraseLettersCode.toLowerCase()}]+\\b(?![,])`)

  return dictionary.filter(word => 
    searchRegexp.test(word) && word.length === +phraseCode.length
  );
}

module.exports = {
  phraseDecode,
  getMatchedWords
}