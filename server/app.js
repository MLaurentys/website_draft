/*
 * Initial point of the server application
 */

"use strict";

const ServerHandler = require("./server_handler");

class Apllication {
    constructor() {
        this.server = new ServerHandler();
    }
}

let App = new Apllication();
