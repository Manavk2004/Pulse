import { v } from "convex/values";
import { query } from "./_generated/server";
import { mutation } from "./_generated/server";

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