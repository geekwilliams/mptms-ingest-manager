// Ingest manager - MPTMS
import express from "express";
import { envDiscover } from "./services/cinema-discover.js";
import convert from 'xml-js';

let discoveryService = new envDiscover();

discoveryService.start()
    .then(res => console.log(res));
