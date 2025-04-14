import { Hono } from "jsr:@hono/hono";
import { serveStatic } from "jsr:@hono/hono/deno";

const app = new Hono();

app.use(serveStatic({ root: "./public" }));

export default app;
