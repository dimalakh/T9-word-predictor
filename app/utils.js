const phraseDecode = codes => {
    const letterCode = codes.split('').map(code => {
        switch (code) {
        case '1':
            return ''
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
        case '*':
            return ''
        case '#':
            return ''
        default:
            return ''
    }
  })

  return letterCode.join('')
}

module.exports = {
  phraseDecode
}