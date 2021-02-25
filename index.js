async function getData() {
	return await fetch('https://cherguvannya-71680-default-rtdb.firebaseio.com/test.json');
}

getData()
	.then((response) => response.json())
	.then((data) => {
		const all = Object.values(data);

		all.forEach((item) => {
			document.querySelector('.week').innerHTML += `
			<div class="week__item">
					<div class='week__top'>
						<h2 class="week__day ">${item.text}</h2>
						<p class="week__date ">${item.date}</p>
					</div>
					<div class='week__body'>
						<div class='week__name'>
							<p class='week__name-child'>
								Jone Doe
							<p>
							<p class='week__count'>2</p>
							</div>
							<div class='week__name'>	
							<p class='week__name-child'>
								Илон Макс
							<p>
							<p class='week__count'>2</p>
						</div>
					</div>
				</div>`;
		});
	});
