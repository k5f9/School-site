import { mysqlEnum, mysqlTable, int, varchar, boolean } from "drizzle-orm/mysql-core";

export const UserSchema = mysqlTable('user', {
    den: varchar({length:255}),
    class: varchar({length:255}).unique(),
    uroki: varchar({length: 255})
});
