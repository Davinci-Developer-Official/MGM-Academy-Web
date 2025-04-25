const WebSocket = require("ws");

const NEXT_WS_PORT = 8080; //websocket for next js
const PYTHON_WS_URL = "ws://localhost:8000"; //python websocket server

//websocket server for next js
const wss = new WebSocket.Server({port:NEXT_WS_PORT});

wss.on("on",(ws)=>{
    console.log("server connected successfully");

    // connect to python Websocket;
    const pySocket = new WebSocket(PYTHON_WS_URL);

    pySocket.on("open",()=>{
        console.log("connected to python websocket");
    })
})