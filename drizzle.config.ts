import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: ['./server/db/schemas/*.schema.ts'],
    dialect: 'mysql',
    dbCredentials: {
        url: 'mysql://u11792_aLARWXfWFm:ug1v3PS1RnY%5EG%3D9wQxz9G%3DVB@c2.play2go.cloud:3306/s11792_bogdano'
    },
});