import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
    user: defineTable({
        username: v.string(),
        completed: v.boolean() 
    }),
})