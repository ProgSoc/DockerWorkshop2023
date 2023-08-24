import express from 'express';
const app = express();
const port = 3000;

import routes from './routes';

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
