const base = require('../../database/config/airtableConnection');

module.exports = async (req, res, next) => {
  try {
    const data = (await base('shrinc').select({
      filterByFormula: 'is_valid',
      sort: [{ field: 'fullName', direction: 'asc' }],
      fields: ['fullName', 'email', 'city', 'type', 'remote', 'priceRange', 'availability', 'skype', 'image', 'postCode'],
      maxRecords: 5,
    }).all());
    res.send({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};
