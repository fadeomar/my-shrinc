const { clientError } = require('./errors/clientError');
const {
  cities, initialResult, profile, signup,
} = require('./routes');

module.exports = {
  clientError,
  cities,
  initialResult,
  profile,
  signup,
};
