function load() {
	// Get the modal
	var modals = document.getElementsByClassName('modal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var imgs = document.getElementsByClassName('myImg');
	var modalImgs = document.getElementsByClassName("modal-content");
	var captionTexts = document.getElementsByClassName("caption");
	var spans = document.getElementsByClassName("close");
	
	for (var i = 0; i < imgs.length; i++) {
		var img = imgs[i];
		var modal = modals[i];
		var modalImg = modalImgs[i];
		var captionText = captionTexts[i];
		var span = spans[i];
		img.onclick = function() {
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		};
		span.onclick = function() { 
	    	modal.style.display = "none";
		};
	}
}

load();
