import { v } from "convex/values";
import { query, mutation, action } from "./_generated/server";
import { api } from "./_generated/api";
import { Event } from "../components/eventCalender"


// You can write data to the database via a mutation:
export const addEvent = mutation({ args: {value: Event}, handler: async (ctx, args) => {
  
      const id = await ctx.db.insert("numbers", { value: args.value });
  
      console.log("Added new document with id:", id);
      // Optionally, return a value from your mutation.
      // return id;
    },
  });