// Ingest manager - MPTMS
import express from "express";
import { envDiscover } from "./services/cinema-discover.js";
import convert from 'xml-js';
import { automount } from './services/automount.js';
let discoveryService = new envDiscover();

let automountService = new automount();

//discoveryService.start().then(res => {console.log(res)});

automountService.start();