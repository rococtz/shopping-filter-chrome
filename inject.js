(function () {
	const start = parseInt(window.prompt("Start: ", 0));
	const finish = parseInt(window.prompt("Finish: ", 100));
	const elements = document.querySelectorAll('.selected_content#c_Brand .asf-v');

	const itemsToClick = [];
	elements
		.forEach((element, index) => {
			if (index >= start && index <= finish) {
				const label = element.children[1].textContent.toLowerCase();
				if (label.indexOf('specified') === -1 && label.indexOf('home') === -1) {
					itemsToClick.push(element.children[0]);
				}
			}
		});

	const interval = setInterval(() => {
		if (itemsToClick.length > 10) {
			for (i = 0; i < 10; i++) {
				const item = itemsToClick.pop();
				item.click();
			}
		} else if (itemsToClick.length > 0) {
			for (i = 0; i < itemsToClick.length; i++) {
				const item = itemsToClick.pop();
				item.click();
			}
		} else {
			clearInterval(interval);
		}
	}, 10);
})();
