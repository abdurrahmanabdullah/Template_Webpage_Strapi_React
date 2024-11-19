// 'use strict';

// /**
//  * page controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::page.page',({strapi})=>({

//     async findone(ctx){
// const{id}=ctx.params;
// const entity=await strapi.db.query('api::page.page').findOne({

//     where:{slug:id}
// });
// const sanitizerEntity=await this.sanitizeOutput(entity,ctx);
// return this.transformResponse(sanitizerEntity);

//     }
// }));


///////------
'use strict';

/**
 * check controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitize } = require('@strapi/utils');
// module.exports = createCoreController('api::check.check');

module.exports = createCoreController('api::page.page', ( {strapi}) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;
  
      const query = {
        filters: { slug },
        ...ctx.query,
      };
  
      const post = await strapi.entityService.findMany("api::page.page", query);
      //const sanitizedEntity = await this.sanitizeOutput(post,ctx);
      const schema = strapi.getModel('api::page.page');
      const sanitizedEntity = await sanitize.contentAPI.output(post, schema);
      return this.transformResponse(sanitizedEntity[0]);
    },
  }));