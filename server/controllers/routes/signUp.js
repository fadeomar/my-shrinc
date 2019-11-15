const bcrypt = require('bcrypt');

const { signupSchema, imageSchema } = require('../validation');
const base = require('../../database/config/airtableConnection');
const cloudinary = require('../../database/config/cloudinaryConnection');

module.exports = async (req, res, next) => {
  try {
    const therapist = JSON.parse(req.body.data);
    const therapistInfo = { ...therapist };
    const availability = JSON.parse(req.body.availability);
    const isEmailExist = await base('shrinc').select({
      filterByFormula: `(email = '${therapist.email}')`,
    }).all();
    if (isEmailExist.length) {
      res.status(400).send({ statusCode: 400, message: 'The email is already exist' });
    } else if (req.files) {
      const { image } = req.files;
      await imageSchema.validate({ image });
      await signupSchema.validate({ ...therapist, availability });
      const uploadedImage = await cloudinary.uploader.upload(image.path);
      const hashedPassword = await bcrypt.hash(therapist.password, 10);
      delete therapistInfo.confirm;
      delete therapistInfo.terms;
      therapistInfo.password = hashedPassword;
      therapistInfo.language = JSON.stringify(therapistInfo.language);
      therapistInfo.image = [{ url: uploadedImage.url }];
      therapistInfo.availability = req.body.availability;
      therapistInfo.insurance = JSON.stringify(therapistInfo.insurance);
      await base('shrinc').create([{
        fields: { ...therapistInfo },
      }]);
      res.send({ statusCode: 200, message: 'Signup Successfuly' });
    } else {
      res.status(400).send({ statusCode: 400, message: 'There is no image' });
    }
  } catch (e) {
    if (e.name === 'ValidationError') {
      res.status(400).send({ statusCode: 400, message: 'Validation Error' });
    } else {
      next(e);
    }
  }
};
