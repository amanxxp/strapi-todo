/**
 * todo controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::todo.todo',({strapi})=>({
    async create(ctx){
        try{
            const {todo_id,Todo_name,Todo_status,Todo_detail} = ctx.request.body;
            const todo = await strapi.entityService.create('api::todo.todo',{
                data:{todo_id,Todo_name,Todo_status,Todo_detail},
            });
            ctx.body = todo;
        }catch(err){
            ctx.throw(400,err);
        }
    },
    async findOne(ctx){
        try{
            const {id} = ctx.params;
            const todo = await strapi.entityService.findOne('api::todo.todo',id);
            if(!todo){
                return ctx.notFound('Todo not found');
            }
            ctx.body = todo;
        }catch(err){
            ctx.throw(400,err);
        }
    }
}));
