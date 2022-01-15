import "reflect-metadata";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

import { UserResolver } from "./resolvers/user";

const firebaseConfig = {
    apiKey: "AIzaSyCbKvEkU9DI_Pwb-F0GGHpnMSFRfg8icxQ",
    authDomain: "zermelo-api-website.firebaseapp.com",
    projectId: "zermelo-api-website",
    storageBucket: "zermelo-api-website.appspot.com",
    messagingSenderId: "599142929731",
    appId: "1:599142929731:web:9f5b337da95ee78486cbf6",
};

async function main() {
    // Make connection to firestore
    initializeApp(firebaseConfig);
    const db = getFirestore();

    const app = express(); // Create express server
    app.use(cors()); // Allow cors requests

    const apollo = new ApolloServer({
        // Create apollo server with type-graphql schema
        schema: await buildSchema({
            resolvers: [UserResolver],
        }),
        context: ({ req, res }) => ({
            db: db,
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
