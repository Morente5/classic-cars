function loadSearch() {
	var search = document.querySelector('input[name="search"]');
	search.addEventListener('input', function() {
		var cards = document.getElementsByClassName('card');
		for (var i = 0; i < cards.length; i++) {
			if (!this.value) {
				cards[i].style.display = 'inline-block';
			}
			else {
				var regExp = new RegExp(this.value,"gi");
				var element = cards[i].querySelector('h4');
				var content = element.textContent;
				if (regExp.test(content)){
					cards[i].style.display = 'inline-block';
				}
				else {
					cards[i].style.display = 'none';
				}
			}
		}
	});
}


loadSearch();
