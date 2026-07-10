import { serve } from "bun";
serve({ port: 3000, fetch: () => new Response(Bun.file("index.html"), { headers: { "Content-Type": "text/html" } }) });
console.log("Server running at http://localhost:3000/");