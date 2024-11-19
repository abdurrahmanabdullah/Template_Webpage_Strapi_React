// 'use strict';

// /**
//  * page router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// // module.exports = createCoreRouter('api::page.page');
// module.exports = {
//     routes: [
//       {
//         method: 'GET',
//         path: '/pages/:slug',
//         handler: 'page.findOne',
//         config: {
//           auth: false
//         },
//       }
//     ]
//   }


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
        path: '/pages/:slug', 
        handler: 'api::page.page.findBySlug',
      },
    ]
  };



