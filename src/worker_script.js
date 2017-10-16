"use strict";

self.onmessage = function(e) {
	let data = e.data;
	console.log("worker got data:", data);
	if (data.type === "ws_send") {
		let sendData = data.data;
		ws.send("from client worker : " + sendData);
	}
	if (data.type === "echo") {
		self.postMessage({ type: "echo", data: data });
	}
};

const url = "ws://localhost:9000/ws/";
const ws = new WebSocket(url);
const date = new Date();

ws.onopen = function() {
	console.log("worker open ws");
	ws.send("hello from client worker");
};

ws.onmessage = function(e) {
	let data = e.data.toString();
	console.log("worker on ws message : ", data);
	self.postMessage({ type: "ws", data: data });
};
ws.onclose = function(e) {
	console.log("on ws close");
	self.postMessage({ type: "ws", data: "onclose" });
};
ws.onerror = function(e) {
	console.log("on ws error");
	self.postMessage({ type: "ws", data: "onerror" });
};
