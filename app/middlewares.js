const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
}

const response = (req, res, next) => {
  res.sendJSON = data => res.send({ data })
  res.sendError = error => res.status(400).send({ error })

  next()
}
  
module.exports = { cors, response }