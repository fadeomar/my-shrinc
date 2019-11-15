const { clientError } = require('./errors/clientError');
const {
  cities, initialResult, profile, signup, filter,
} = require('./routes');

module.exports = {
  clientError,
  cities,
  initialResult,
  profile,
  signup,
  filter,
};
