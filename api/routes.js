import express from "express";
import { append } from "express/lib/response";

let router = express.Router();

router.use('/', (req, res, next) => {
    res.send(200).json({ 'message':'hello from ingest service'});
    next();
});

