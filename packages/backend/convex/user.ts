import { v } from "convex/values";
import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { Doc } from "./_generated/dataModel";

export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("user").collect()
    }
})


export const add = mutation({
    args: { username: v.string(), id: v.string()},
    handler: async (ctx, {  username }) => {
        await ctx.db.insert("user", { username, completed: false})
    }
})

export const findId = query({
    args: {id: v.id("user")},
    handler: async(ctx, args) => {
        const task: Doc<"user"> | null = await ctx.db.get(args.id)
        if (task === null){
            return null
        }
        return { task, username: task?.username}
    }
})


export const getId = query({
    args: {username: v.string()},
    handler: async (ctx, args) => {
        const user = await ctx.db.query("user").filter(q => q.eq(q.field("username"), args.username)).first()
        return user
    }
})