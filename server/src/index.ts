import express from "express";

async function main() {
    const app = express(); // Create express server

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
