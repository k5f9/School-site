import {defineEventHandler} from "h3";
import {UserSchema, db} from "~/server/db";
import {eq} from "drizzle-orm";

export default defineEventHandler(async (event) => {
    console.log('Очистка');


    await db.delete(UserSchema).execute();
});