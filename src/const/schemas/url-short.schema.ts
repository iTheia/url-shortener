const Joi = require('joi');

export const urlShortSchema = Joi.string().length(8).normalize().required();
