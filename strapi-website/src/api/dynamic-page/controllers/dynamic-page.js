'use strict';

/**
 * dynamic-page controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::dynamic-page.dynamic-page');

'use strict';

/**
 * check controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitize } = require('@strapi/utils');
// module.exports = createCoreController('api::check.check');

module.exports = createCoreController('api::dynamic-page.dynamic-page', ( {strapi}) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;
  
      const query = {
        filters: { slug },
        ...ctx.query,
      };
  
      const post = await strapi.entityService.findMany("api::dynamic-page.dynamic-page", query);
      //const sanitizedEntity = await this.sanitizeOutput(post,ctx);
      const schema = strapi.getModel('api::dynamic-page.dynamic-page');
      const sanitizedEntity = await sanitize.contentAPI.output(post, schema);
      return this.transformResponse(sanitizedEntity[0]);
    },
  }));