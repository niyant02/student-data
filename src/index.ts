import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { schema } from "./schema";
import { createContext } from "./context";

dotenv.config();

const { PORT = 4000 } = process.env;

async function startApolloServer() {
  const server = new ApolloServer({
    schema,
    context: createContext,
  });
  await server.start();
  const app = express();
  server.applyMiddleware({ app, path: "/" });
  await new Promise((resolve: any) => app.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
