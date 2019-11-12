const base = require('../../database/config/airtableConnection');

module.exports = async (req, res, next) => {
  try {
    const cities = await base('shrinc').select({
      filterByFormula: 'is_valid',
      fields: ['city'],
    }).all();
    const allCities = [];
    cities.map((city) => allCities.push(city.fields.city));
    const uniqueCities = allCities.filter((item, index) => allCities.indexOf(item) === index);
    res.send({ statusCode: 200, data: uniqueCities });
  } catch (error) {
    next(error);
  }
};
