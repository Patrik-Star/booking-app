import { v } from "convex/values";
import { query, mutation, action } from "./_generated/server";
import { api } from "./_generated/api";


// You can write data to the database via a mutation:
export const addEvent = mutation({ args: {value: v.number()}, handler: async (ctx, args) => {
  
      const id = await ctx.db.insert("numbers", { value: args.value });
  
      console.log("Added new document with id:", id);
      // Optionally, return a value from your mutation.
      // return id;
    },
  });