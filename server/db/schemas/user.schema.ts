import { mysqlEnum, mysqlTable, int, varchar, boolean } from "drizzle-orm/mysql-core";

export const UserSchema = mysqlTable('user', {
    id: int().autoincrement().primaryKey(),
    den: varchar({length:255}),
    urokA: varchar({length:255}),
    urokB: varchar({length: 255}),
    urokV: varchar({length: 255}),
    urokG: varchar({length: 255})
});
