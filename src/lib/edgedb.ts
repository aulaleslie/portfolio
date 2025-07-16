import { createClient } from "edgedb";
import edge from "@/../dbschema/edgeql-js"; // adjust this if you use different alias paths

const client = createClient(); // will automatically use local gel instance or env vars

export { client, edge };
