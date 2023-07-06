const fs = require('fs/promises');
const path = require('path');
const express = require('express');
const viteServer = require('vite');


const isTest = process.env.VITEST

async function createServer(root = process.cwd()) {

    const resolve = (p) => path.resolve(__dirname, p)

    const app = express();

    const vite = await viteServer.createServer({
        root,
        logLevel: isTest ? 'error' : 'info',
        server: {
            middlewareMode: true,
        },
        appType: 'custom',
    });

    // use vite's connect instance as middleware
    app.use(vite.middlewares);

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());


    app.get('/api/hello', (req, res) => {

        res.json({ msg: 'Hello From Express' });
    });

    app.post('/api/world', (req, res) => {

        const message = req.body.message;

        res.json({ receivedMsg: message });
    });

    app.get('/', async (req, res) => {

        try {

            const baseHtml = await fs.readFile(resolve('../index.html'), 'utf-8');
            const transformedHtml = await vite.transformIndexHtml(req.originalUrl, baseHtml);

            res.status(200).set({ 'Content-Type': 'text/html' }).end(transformedHtml);
        }
        catch (e) {

            vite.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        }
    });

    return { app, vite };
}

if (!isTest) {

    createServer().then(({ app }) =>
        app.listen(5173, () => {
            console.log('Listening on http://localhost:5173')
        }),
    )
}