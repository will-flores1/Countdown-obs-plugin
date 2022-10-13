const main = () => {
	const timer = document.querySelector(".timer");
	const minutes = document.querySelector(".minutes");
	const seconds = document.querySelector(".seconds");
	const start = document.querySelector(".start");
	const stop = document.querySelector(".stop");
	const reset = document.querySelector(".reset");
	let minutesDisplay = 0;
	let secondsDisplay = 0;
	let isTimerRunning;

	minutes.addEventListener("input", (event) => {
		const { value } = event.target;

		timer.textContent = parseInt(value);
		minutesDisplay = parseInt(value);
		formatTimer();
	});

	seconds.addEventListener("input", (event) => {
		const { value } = event.target;

		timer.textContent = parseInt(value);
		secondsDisplay = parseInt(value);
		formatTimer();
	});

	function formatTimer() {
		if (secondsDisplay < 10 && minutesDisplay < 10) {
			timer.textContent = `0${minutesDisplay}:0${secondsDisplay}`;
		} else if (secondsDisplay < 10) {
			timer.textContent = `${minutesDisplay}:0${secondsDisplay}`;
		} else if (minutesDisplay < 10) {
			timer.textContent = `0${minutesDisplay}:${secondsDisplay}`;
		} else {
			timer.textContent = `${minutesDisplay}:${secondsDisplay}`;
		}
	}

	console.log(timer.textContent);
	console.log(start);
};

main();
