import index from "./index.html";

const server = Bun.serve({
  port: parseInt(process.env.PORT || "3000"),
  routes: {
    "/": index,
  },
  development: {
    hmr: true,
    console: true,
  }
});

console.log(`Handbook server running at http://localhost:${server.port}`);
