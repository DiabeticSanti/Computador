import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "monorail.proxy.rlwy.net",
  user: "root",
  password: "xYHDKGZuZlCfKyNKEKDyZaiUqMLIFUCt",
  port: 50388,
  database: "railway",
});
