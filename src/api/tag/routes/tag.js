'use strict';

/**
 * tag router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tag.tag', {
    prefix: '', // /tags --> /prefix/tags
    only: ['find', 'findOne'],
    except: [],
    config: {
      find: {
        auth: false, //disabling the JWT auth for this route
        policies: [],
        middlewares: [],
      },
      findOne: {},
      create: {},
      update: {},
      delete: {},
    },
});
