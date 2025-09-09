export function cors() {
  return {
    "Access-Control-Allow-Origin": process.env.ALLOW_ORIGIN ?? "http://localhost:5173",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}