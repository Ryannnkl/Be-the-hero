const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  SegmentBodyJoi: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),

  SegmentHeaderAlthorization: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),

  SegmentQueryPage: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),

  SegmentParamsId: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  })
};
