const main = () => {
	const channel = new BroadcastChannel("obs");
	const timer = document.querySelector(".timer");

	channel.onmessage = (message) => {
		console.log(message.data);
		function formatTimer() {
			if (message.data[0] < 10 && message.data[1] < 10) {
				timer.textContent = `0${message.data[0]}:0${message.data[1]}`;
			} else if (message.data[1] < 10) {
				timer.textContent = `${message.data[0]}:0${message.data[1]}`;
			} else if (message.data[0] < 10) {
				timer.textContent = `0${message.data[0]}:${message.data[1]}`;
			} else {
				timer.textContent = `${message.data[0]}:${message.data[1]}`;
			}
		}
		formatTimer();
	};
};

main();
