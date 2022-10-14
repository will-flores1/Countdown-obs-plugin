const main = () => {
	// region Properties
	const channel = new BroadcastChannel("obs");
	const message = [0, 0];
	const head = document.querySelector(".head");
	const timer = document.querySelector(".timer");
	const minutes = document.querySelector(".minutes");
	const seconds = document.querySelector(".seconds");
	const start = document.querySelector(".start");
	const stop = document.querySelector(".stop");
	const reset = document.querySelector(".reset");
	let minutesDisplay = 0;
	let secondsDisplay = 0;
	let isTimerRunning;
	let interval;
	// endregion

	// region Defaults
	channel.postMessage(message);
	isTimerRunning = false;
	minutes.disabled = false;
	seconds.disabled = false;
	start.disabled = true;
	stop.disabled = true;
	reset.disabled = false;
	// endregion

	// region Setters
	function setMinutes(count) {
		minutesDisplay = count;
		minutes.value = count;
		message[0] = parseInt(minutes.value);
		channel.postMessage(message);
		formatTimer();
	}

	function setSeconds(count) {
		secondsDisplay = count;
		seconds.value = count;
		message[1] = parseInt(seconds.value);
		channel.postMessage(message);
		formatTimer();
	}
	// regionend

	// region Event Listeners
	minutes.addEventListener("input", (event) => {
		const { value } = event.target;
		start.disabled = false;
		reset.disabled = false;
		minutesDisplay = parseInt(value);
		message[0] = parseInt(value);
		channel.postMessage(message);
		formatTimer();
	});

	seconds.addEventListener("input", (event) => {
		const { value } = event.target;
		start.disabled = false;
		reset.disabled = false;
		secondsDisplay = parseInt(value);
		message[1] = parseInt(value);
		channel.postMessage(message);
		formatTimer();
	});

	start.addEventListener("click", startTimer);
	stop.addEventListener("click", stopTimer);
	reset.addEventListener("click", resetTimer);
	// endregion

	// region Methods
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

	function startTimer() {
		if (minutesDisplay > 0 || secondsDisplay > 0) {
			isTimerRunning = true;
			minutes.disabled = true;
			seconds.disabled = true;
			start.disabled = true;
			stop.disabled = false;
			reset.disabled = false;

			if (minutesDisplay > 0 && secondsDisplay === 0) {
				setTimeout(() => {
					console.log("only minute no seconds");
					setMinutes(--minutesDisplay);
					setSeconds(60);
				}, 1000);
			}

			interval = setInterval(() => {
				if (minutesDisplay <= 0 && secondsDisplay <= 0 && isTimerRunning) {
					console.log("end timer");
					minutes.disabled = false;
					seconds.disabled = false;
					endTimer();
					clearInterval(interval);
				}

				if (minutesDisplay > 0 || secondsDisplay > 0) {
					console.log("minus seconds");
					setSeconds(--secondsDisplay);
				}

				if (minutesDisplay > 0 && secondsDisplay === 0) {
					console.log("minus minutes");
					setTimeout(() => {
						setSeconds(59);
						setMinutes(--minutesDisplay);
					}, 1000);
					// return;
				}
			}, 1000);
		}
	}

	function stopTimer() {
		isTimerRunning = false;
		minutes.disabled = false;
		seconds.disabled = false;
		start.disabled = false;
		stop.disabled = true;
		clearInterval(interval);
		// setMinutes(minutesDisplay);
		// setSeconds(secondsDisplay);
	}

	function resetTimer() {
		location.reload();
		isTimerRunning = false;
		minutes.disabled = false;
		seconds.disabled = false;
		start.disabled = true;
		stop.disabled = true;
		clearInterval(interval);
		setMinutes(0);
		setSeconds(0);
	}

	function endTimer() {
		location.reload();
		isTimerRunning = false;
		start.disabled = true;
		stop.disabled = true;
		reset.disabled = false;
	}
	// endregion
};

main();
