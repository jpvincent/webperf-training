// long loop
function calculateXiterations(x) {
	var start = performance.now(),
		lastMessage = performance.now(),
		html = ''
	for (i = 0; i <= x; i++) {
		now = performance.now()
		html = i + ' iterations made in ' + Math.round(now - start) + 'ms'
		// sends something every 50 ms
		if (now - lastMessage > 50) {
			lastMessage = now
			postMessage(html)
		}
	}
	// once done, send the result back to the main page
	postMessage(html)
}

// wait for the main page to let us execute our computations
onmessage = function (event) {
	var x = parseInt(event.data, 10)
	calculateXiterations(x)
}
