const server = Deno.listen({ port: 80 });

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn): Promise<void> {
  const httpConn = Deno.serveHttp(conn);

  for await (const requestEvent of httpConn) {
    requestEvent.respondWith(
      new Response("Hello World!")
    );
  }
}
