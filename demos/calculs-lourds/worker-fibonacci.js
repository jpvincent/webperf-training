var results = [];

function resultReceiver(event) {
	results.push(parseInt(event.data, 10));
	if (results.length == 2) {
		postMessage(results[0] + results[1]);
	}
}

function errorReceiver(event) {
	throw event.data;
}

onmessage = function(event) {
	var n = parseInt(event.data, 10);

	if (n === 0 || n === 1) {
		postMessage(n);
		return;
	}

	for (var i = 1; i <= 2; i++) {
		var worker = new Worker("worker-fibonacci.js");
		worker.onmessage = resultReceiver;
		worker.onerror = errorReceiver;
		worker.postMessage(n - i);
	}
};
