import { prependOnceListener } from "process";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const print = console.log;
const util = require("util");

class ServerHandler {
    constructor(AssignContent) {
        this.serverConnection = new W3CWebSocket("ws://127.0.0.1:8000");
        this.serverConnection.onopen = () => {
            console.log("WebSocket Client Connected");
        };
        this.callbacks = {};

        this.SetCallback = this.SetCallback.bind(this);
        this.HandleServerMessages = this.HandleServerMessages.bind(this);

        this.serverConnection.onmessage = this.HandleServerMessages;
        this.SetCallback("mainGalleryContent", AssignContent);
        this.SetCallback("cID", () => {});
    }

    SetCallback(key, cbFunc) {
        this.callbacks[key] = cbFunc;
    }

    HandleServerMessages(message) {
        let mes = message.data;
        let divider = mes.indexOf(" ");
        let firstWord = mes.substring(0, divider);
        let info = JSON.parse(mes.substring(divider, mes.lenght));
        print("RECEIVED:\n" + firstWord);
        print(info);
        if (!this.callbacks.hasOwnProperty(firstWord))
            print("Server message not handled: " + firstWord);
        else this.callbacks[firstWord](info);
    }
}

export default ServerHandler;
