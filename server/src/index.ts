import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { json } from "body-parser";
import cors from "cors";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./UserResolver";
import { AppDataSource } from "./data-source";

import dotenv from "dotenv";
dotenv.config();

(async () => {
  const app = express();
  app.get("/", (_req, res) => res.send("hello"));

  AppDataSource.initialize();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
  });
  await apolloServer.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }) => ({ req, res }),
    })
  );

  app.listen(4000, () => {
    console.log("express server started");
  });
})();

// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
