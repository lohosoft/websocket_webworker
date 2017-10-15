"use strict";

init();
function init() {
	console.log("worker init");
}
self.onmessage = function(e) {
	let data = e.data;
	console.log("worker got data : ", data);

	self.postMessage({ type: "echo", data: data });
};
