import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { readFileSync } from "fs";

const { data: countries } = JSON.parse(readFileSync(new URL("./out/all", import.meta.url), "utf8"));

new Elysia()
  .use(cors())
  .get("/", ({ query }) => {
    const { q, loc } = query;
    let result = countries;

    if (loc) {
      const code = loc.toLowerCase();
      result = result.filter((c) => c.code === code);
    }

    if (q) {
      const fields = q.split(",").map((f) => f.trim());
      result = result.map((entry) => {
        const picked = { code: entry.code };
        for (const field of fields) {
          if (entry[field] !== undefined) {
            if (typeof entry[field] === "object" && loc) {
              picked[field] = entry[field][loc] ?? entry[field];
            } else {
              picked[field] = entry[field];
            }
          }
        }
        return picked;
      });
    }

    return result;
  })
  .get("/ping", () => ({ message: "pong" }))
  .listen(3000);

console.log(`🦊: Geo API is running at http://localhost:3000`);
