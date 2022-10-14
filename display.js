const main = () => {
	const channel = new BroadcastChannel("obs");
	const timer = document.querySelector(".timer");

	channel.onmessage = (message) => {
		console.log(message.data);
		function formatTimer() {
			if (parseInt(message.data[0]) < 10 && parseInt(message.data[1]) < 10) {
				timer.textContent = `0${parseInt(message.data[0])}:0${parseInt(
					message.data[1]
				)}`;
			} else if (parseInt(message.data[1]) < 10) {
				timer.textContent = `${parseInt(message.data[0])}:0${parseInt(
					message.data[1]
				)}`;
			} else if (parseInt(message.data[0]) < 10) {
				timer.textContent = `0${parseInt(message.data[0])}:${parseInt(
					message.data[1]
				)}`;
			} else {
				timer.textContent = `${parseInt(message.data[0])}:${parseInt(
					message.data[1]
				)}`;
			}
		}
		formatTimer();
	};
};

main();
