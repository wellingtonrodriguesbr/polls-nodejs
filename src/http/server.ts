import fastify from "fastify";
import fastifyCookie from "@fastify/cookie";

import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";

const app = fastify();

app.register(fastifyCookie, {
  secret: "my-super-secret-key",
  hook: "onRequest",
});

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server is running!");
});
