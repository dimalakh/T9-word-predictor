const { phraseDecode, getMatchedWords } =  require('../utils')

describe('Utils', () => {
  describe('phraseDecode', () => {
    it('should return empty string if input is specific symbol', () => {
      const result = phraseDecode('*')

      expect(result).toBe('')
    })

    it('should return empty string if input is letter', () => {
      const result = phraseDecode('A')

      expect(result).toBe('')
    })

    it('should return empty string if input is "1', () => {
      const result = phraseDecode('1')

      expect(result).toBe('')
    })

    it('should return "tuv" if input is "A8"', () => {
      const result = phraseDecode('A8')

      expect(result).toBe('tuv')
    })

    it('should return "abcdef" if input is "23"', () => {
      const result = phraseDecode('23')

      expect(result).toBe('abcdef')
    })
  })

  describe('getMatchedWords', () => {
    const dictionary = [ 'a', 'b', 'c', 'ab', 'ab', 'ac', 'acd', 'ddd' ]
    
    it('should return an empty array if number letters don`t match any word from dictionary', () => {
      const result = getMatchedWords(dictionary, '50')

      expect(result).toEqual([])
    })

    it('should return an array of matched one character words if phrase_code is single number', () => {
      const result = getMatchedWords(dictionary, '2')

      expect(result).toEqual([ 'a', 'b', 'c' ])
    })

    it('should return an array of matched two characters words if phrase_code length is 2', () => {
      const result = getMatchedWords(dictionary, '21')

      expect(result).toEqual([ 'ab', 'ab', 'ac' ])
    })

    it('should return an array of matched words which use one set of letters', () => {
      const result = getMatchedWords(dictionary, '333')

      expect(result).toEqual([ 'ddd' ])
    })
  })
})