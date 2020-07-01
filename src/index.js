import env from 'dotenv';
env.config();
import { start } from './server';

start(process.env.PORT || 3000);
