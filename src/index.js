import env from 'dotenv'
env.config()
import { start } from "./server";


start(3000)
