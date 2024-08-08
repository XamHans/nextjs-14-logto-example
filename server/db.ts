// import "server-only";

console.log("db.ts: This log should only appear server-side");

const CONNECTION_STRING = "PLACEHOLDER_CONNECTION_STRING";
console.log("db.ts: Connection string:", CONNECTION_STRING);

export const db = {
  query: async (sql: string, params: any[]) => {
    console.log("db.query: Executing query:", sql, "with params:", params);
    // Simulated query execution
    return { id: params[0], name: "John Doe", email: "john@example.com" };
  }
};


