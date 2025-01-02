"use strict";
/**
 * todo router
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = {
    routes: [
        {
            method: 'POST',
            path: '/todos',
            handler: 'todo.create' /* this route will exectute the function
             created on controllers that is create */
        },
        {
            method: 'GET',
            path: '/todos/:id',
            handler: 'todo.findOne'
        }
    ]
};
