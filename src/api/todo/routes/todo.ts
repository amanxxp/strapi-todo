/**
 * todo router
 */

import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::todo.todo',{
//     only:['create'],
//     config:{
//         create:{
//             auth:false,
//             middlewares:[],
//             policies:[],
//         },
//     },
    
// });
export default {
    routes:[
        {
            method:'POST',
            path:'/todos',
            handler:'todo.create' /* this route will exectute the function
             created on controllers that is create */
        },
        {
            method:'GET',
            path:'/todos/:id',
            handler:'todo.findOne'
        }
    ]
}
