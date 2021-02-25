const input = document.querySelector('.inputData');

function sendData(opts) {
	fetch('https://cherguvannya-71680-default-rtdb.firebaseio.com/test.json', {
		method: 'POST',
		body: JSON.stringify(opts),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	console.log(input.value);
}

document.querySelector('button').addEventListener('click', () => {
	sendData({
		date: new Date().toDateString(),
		text: input.value,
	});
});
