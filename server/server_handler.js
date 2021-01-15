/*
 * This file is responsible for setting up the server and providing
 *  new connections with callback and handling methods
 */

const webSocketServer = require("websocket").server;
const http = require("http");

// Server Configuration
const webSocketsServerPort = require("./constants").webSocketsServerPort;
const mainPageGallery = require("./constants").mainPageGallery;

//Helper
const print = console.log;

class ServerHandler {
    constructor() {
        this.server = http.createServer();
        this.server.listen(webSocketsServerPort);
        this.wsServer = new webSocketServer({
            httpServer: this.server,
        });
        this.clients = {};

        this.SendMessage = this.SendMessage.bind(this);
        this.ReceiveNewConnection = this.ReceiveNewConnection.bind(this);
        this.OpenConnection = this.OpenConnection.bind(this);
        this.CloseConnection = this.CloseConnection.bind(this);
        this.SendInitialMessage = this.SendInitialMessage.bind(this);

        this.wsServer.on("request", this.ReceiveNewConnection);
    }

    SendMessage(messageType, cID, infoObject) {
        if (!this.clients[cID]) return;
        print("SENT:");
        print(infoObject);
        this.clients[cID].send(messageType + " " + JSON.stringify(infoObject));
    }

    ReceiveNewConnection(request) {
        const cID = this.OpenConnection(request);
        this.SendInitialMessage(cID);
    }

    OpenConnection(request) {
        const cID = getID();
        const connection = request.accept(null, request.origin);
        this.clients[cID] = connection;
        connection.on("message", (event) => {
            () => print("Received unhandled client message.");
        });
        connection.on("close", (code, reason) =>
            this.CloseConnection(cID, code, reason)
        );
        return cID;
    }

    SendInitialMessage(cID) {
        console.log("NEW CONNECTION: " + cID);
        this.SendMessage("cID", cID, cID);
        this.SendMessage("mainGalleryContent", cID, mainPageGallery);
    }

    CloseConnection(cID, code, reason) {
        print("LEAVING: " + cID);
        delete this.clients[cID];
    }
}

module.exports = ServerHandler;

function getID() {
    const s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    return s4() + s4() + "-" + s4();
}
