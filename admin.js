const form = document.getElementById('form-admin'),
	weekDay = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця', 'Суббота', 'Неділя'];

function sendData(opts) {
	fetch('https://cherguvannya-71680-default-rtdb.firebaseio.com/test.json', {
		method: 'POST',
		body: JSON.stringify(opts),
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	sendData({
		students: [form.children.nameFirst.value, form.children.nameSecondary.value],
		date: {
			day: new Date().toLocaleDateString().split('/'),
			week: weekDay[new Date().getDay() - 1],
		},
	});
});
