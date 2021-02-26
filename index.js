let allChild = [];
let allChildCount;
let all;

async function getData() {
	return await fetch('https://cherguvannya-71680-default-rtdb.firebaseio.com/test.json');
}

getData()
	.then((response) => response.json())
	.then((data) => {
		if (data) {
			all = Object.values(data);
			console.log(data);

			all.forEach((item) => {
				allChild.push(item.students[0]);
				allChild.push(item.students[1]);
			});
			allChildCount = JSON.stringify(
				allChild.reduce((acc, el) => {
					acc[el] = (acc[el] || 0) + 1;
					return acc;
				}, {})
			);
		}
		console.log(allChildCount);
		renderCardChild(allChildCount);
	})
	.catch((err) => console.log(err));

function renderCardChild(obj) {
	if (obj) {
		let object = JSON.parse(obj);

		// console.log(object);

		// arrUsers.forEach((item) => {
		// 	item.filter((user) => console.log(user));
		// });

		Object.keys(object).forEach((item) => {
			document.querySelector('.week').innerHTML += `
			<div class="week__item">
				<div class="week__top">
					<h2 class="week__name">${item}</h2>
					<p class="week__count">${object[item]}</hp>
				</div>
				<div class="week__body">
					<ul>
						<li>02.12.2021</li>
						<li>02.15.2021</li>
						<li>02.17.2021</li>
					</ul>
				</div>
			</div>`;
		});
	} else {
		document.querySelector('.week').innerHTML += `<p class='week__not-found'>Немає чергових</p>`;
	}
}

function handlerInfoUser(e) {
	if (e.target.closest('.week__item')) {
		e.target.closest('.week__item').querySelector('.week__body').classList.toggle('active');
	}
}

document.addEventListener('click', handlerInfoUser);
