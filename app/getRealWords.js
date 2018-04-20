const dictionary = require('./dictionary');

module.exports = (req, res) => {
  const { params, query } = req;
  const searchRegexp = new RegExp(`\\b[${params.letters}]+\\b(?![,])`);
  const realWords = dictionary.filter(word => 
    searchRegexp.test(word) && word.length === +query.length
  );

  res.send({ realWords });
}
