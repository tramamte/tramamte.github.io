(function (window, document) {
	var line = document.getElementById("scrollLine");

	function scrollPosIndicator() {
		var pos = window.pageYOffset,
			height = document.body.clientHeight - window.innerHeight,
			scrolled = (pos / height) * 100;

		line.style.width = (scrolled + '%')
	}
	
	window.addEventListener("scroll", scrollPosIndicator);
}(this, this.document));
