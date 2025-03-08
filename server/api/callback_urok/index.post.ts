import {defineEventHandler} from "h3";
import {UserSchema, db} from "~/server/db";
import {eq} from "drizzle-orm";

export default defineEventHandler(async (event) => {
    console.log('Запрос получен! Хуй');

    const result = await db
        .select()
        .from(UserSchema)
        .execute();

    console.log(result);
    return result;
});