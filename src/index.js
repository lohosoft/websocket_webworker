import MyWorker from "./worker.js";

console.log("index.js");

window.onload = init();
let worker;
let workerRcvDiv = document.getElementById("workerRcv");
function init() {
	document.getElementById("checkWsBTN").addEventListener("click", checkWS);
	document.getElementById("checkWsBTN").addEventListener("touchend", checkWS);


	MyWorker.postMessage({ type: "test", order: "hello" });
	MyWorker.onmessage = function(e) {
		let data = e.data;
		console.log("worker back data :", data);
		workerRcv.innerHTML = JSON.stringify(data) + new Date();
	};

	// setInterval(checkWS, 2000);
	function checkWS() {
		alert("check");
		MyWorker.postMessage({ type: "ws_send", data: "push" });
	}
}

function checkWS() {
	alert("check");
	MyWorker.postMessage({ type: "ws_send", data: "push" });
}
