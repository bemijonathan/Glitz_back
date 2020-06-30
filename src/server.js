import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { dbConnection } from './config/db';
import UserRoutes from './resources/users/user.route';
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/v1/api/users', UserRoutes);

export const start = async (port) => {
    try {
        await dbConnection();
        app.listen(port, () => {
            console.log(`REST API on http://localhost:${port}/v1/api/`);
        });
    } catch (e) {
        console.error(e);
    }
};
