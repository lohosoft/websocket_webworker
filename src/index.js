console.log("index.js");

const MyWorker = require("worker-loader!./worker.js");
let worker;
const hasWorker = true;
if (!hasWorker) {
	// worker polyfill
	const PseudoWorker = require("pseudo-worker");
	worker = new PseudoWorker("./worker.js");
} else {
	worker = new MyWorker();
}

worker.onmessage = function(e) {
	console.log("worker said : ", e.data);
};

worker.postMessage({ type: "dist", word: "teacher", number: 4 });
