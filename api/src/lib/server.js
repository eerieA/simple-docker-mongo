import express from "express";
import config from "./config.js";

export const startServer = () => {

    const httpServer = express();
    const port = config.port;

    // .use for handling all incoming requests
    httpServer.use((req, res, next) => {
        console.log('1 - first express middleware func');
        next();
    })

    // .use for handling any requests that stars with api
    httpServer.use('/api', (req, res, next) => {
        console.log('2 - second express middleware func');
        next();
    })

    // TODO: abstract this to the router
    httpServer.get('/api/ping', (req, res) => {
        console.log(`ℹ️ - Ping route: ${req.url} ${Date.now()}`);
        res.status(200).json({
            message: '✅ - {Pong: test successful'
        });
    })

    httpServer.all('*', (req, res) => {
        console.log(`4 - Catch all...`);
        res.status(404).json({
            message: `${req.url} not found`
        })
    });

    try {
        httpServer.listen(port, () => {
            console.log(`Server running on port ${port}`);
        })
    } catch(err) {
        throw new Error(err);
    }

}