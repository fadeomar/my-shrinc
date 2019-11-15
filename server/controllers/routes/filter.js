const base = require('../../database/config/airtableConnection');
const { getFilteredTherapist } = require('../utils');

module.exports = async (req, res, next) => {
  try {
    const comingData = await base('shrinc').select({
      filterByFormula: 'is_valid',
      sort: [{ field: 'fullName', direction: 'asc' }],
      fields: ['fullName', 'type', 'priceRange', 'image', 'approach', 'city'],
    }).all();
    const data = await getFilteredTherapist(req.body.data, comingData);
    res.send({ statusCode: 200, data });
  } catch (error) {
    next(error);
  }
};
