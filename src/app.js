import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js'
import connectDb from './config/db.config.js';
const app = express();
const PORT = process.env.PORT;
const URLMONGO = process.env.URLMONGO
const dbName = process.env.DBNAME

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);
app.use((req,res)=> res.status(404).json({message: "Pagina no encontrada"}))
connectDb(URLMONGO, dbName)
app.listen(PORT,()=>console.log(`Server online http://localhost:${PORT}`))
