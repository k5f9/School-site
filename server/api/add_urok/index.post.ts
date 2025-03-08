import {defineEventHandler} from "h3";
import {UserSchema, db} from "~/server/db";
import {eq} from "drizzle-orm";

interface Day {
    den: string;
    urokA: string;
    urokB: string;
    urokV: string;
    urokG: string;
}

export default defineEventHandler(async (event) => {
    console.log('Запрос получен!');

    const body: Day = await readBody(event);
    console.log('Тело запроса:', body);

    await db
        .insert(UserSchema)
        .values({
            den: body.den,
            urokA: body.urokA,
            urokB: body.urokB,
            urokV: body.urokV,
            urokG: body.urokG,
        })
        .execute();

    console.log('Данные добавлены в базу:');
    return;
});