import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { UserResolver } from "./resolvers/user";

async function main() {
    const app = express(); // Create express server

    const apollo = new ApolloServer({
        // Create apollo server with type-graphql schema (currently does nothing because it doesnt have a database to connect to)
        schema: await buildSchema({
            resolvers: [UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({
            req,
            res,
        }),
    });

    await apollo.start();
    apollo.applyMiddleware({
        // User apollo server
        app,
        cors: false,
    });

    app.get("/", (_, res) => {
        // Respond on request to endpoint /
        res.send("zermelo-api-website-server --> Status: Online");
    });
    app.listen(4000, () => {
        // Listen on port 4000
        console.log("--> Server started on localhost:4000");
    });
}

main();
