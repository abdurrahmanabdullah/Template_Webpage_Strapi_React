// 'use strict';

/**
 * dynamic-page router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::dynamic-page.dynamic-page');


/**
 * check router
 */


'use strict';

/**
 * check router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

//module.exports = createCoreRouter('api::check.check');

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/dynamic-pages/:slug', 
        handler: 'api::dynamic-page.dynamic-page.findBySlug',
      },
    ]
  };

