import {defineEventHandler} from "h3";
import {UserSchema, db} from "~/server/db";
import {eq} from "drizzle-orm";

interface Day {
    den1: string;
    class1: string;
    urok1: string;
}

export default defineEventHandler(async (event) => {
    console.log('Запрос получен!');

    const body: Day = await readBody(event);
    console.log('Тело запроса:', body);

    await db
        .insert(UserSchema)
        .values({
            den: body.den1,
            class: body.class1,
            uroki: body.urok1,
        })
        .execute();

    console.log('Данные добавлены в базу:');
    return;
});