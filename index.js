import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { readFileSync } from "fs";

const { data: countries } = JSON.parse(readFileSync(new URL("./out/all", import.meta.url), "utf8"));

new Elysia()
  .use(cors())
  .get("/", ({ query }) => {
    const { q, loc, native } = query;
    if (!q) return countries;
    const fields = q.split(",").map((f) => f.trim());
    let entries = Object.entries(countries);

    // Nếu có loc, chỉ lấy quốc gia tương ứng
    if (loc) {
      const code = loc.toLowerCase();
      entries = entries.filter(([c]) => c === code);
    }

    const filtered = {};
    for (const [code, data] of entries) {
      filtered[code] = {};
      for (const field of fields) {
        if (data[field] !== undefined) {
          if (typeof data[field] === "object" && loc) {
            if (data[field][loc]) {
              filtered[code][field] = data[field][loc];
            } else {
              filtered[code][field] = data[field];
            }
          } else {
            filtered[code][field] = data[field];
          }
        }
      }
    }
    return filtered;
  })
  .get("/ping", () => ({ message: "pong" }))
  .listen(3000);

console.log(`🦊: Geo API is running at http://localhost:3000`);
