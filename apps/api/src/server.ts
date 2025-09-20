import express from 'express';
import health from './routes/health';

export function createServer() {
    const app = express();
    app.use(express.json());

    app.use('/', health);

    // 404 handler
    app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

     return app;
}
