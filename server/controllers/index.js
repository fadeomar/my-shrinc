const { clientError } = require('./errors/clientError');
const { cities, initialResult, profile } = require('./routes');

module.exports = {
  clientError,
  cities,
  initialResult,
  profile,
};
