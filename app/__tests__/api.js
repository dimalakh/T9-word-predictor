const app = require('../app')
const hippie = require('hippie')

describe('API', () => {
  const api = () => hippie(app).json()

  it('should return empty array if no words match', () => {
    const phrase_code = 1
    return api()
    .get(`/api/predictedWords/${phrase_code}?list_length=10`)
    .expectStatus(200)
    .expectBody({ data: [] })
    .end()
  })

  it('should return an error if list_length is not a number', () => {
    const phrase_code = 1

    return api()
    .get(`/api/predictedWords/${phrase_code}?list_length=A`)
    .expectStatus(400)
    .expectBody({
      error: [
        {
          location: "query",
          msg: "list_length should be a number",
          param: "list_length",
          value: "A"
        }
      ]
    })
    .end()
  })

  it('should return an error if phrase_code is not a number', () => {
    const phrase_code = 'AbC'

    return api()
    .get(`/api/predictedWords/${phrase_code}?list_length=10`)
    .expectStatus(400)
    .expectBody({
      error: [
        {
          location: "params",
          msg: "phrase_code should be a number",
          param: "phrase_code",
          value: "AbC"
        }
      ]
    })
    .end()
  })

  it('should return an array of two characters words for phrase_code with length 2', () => {
    const phrase_code = '23'

    return api()
    .get(`/api/predictedWords/${phrase_code}?list_length=10`)
    .expectStatus(200)
    .expectBody({ data: [ 'ad', 'be' ] })
    .end()
  })
})