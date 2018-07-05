(function (window, document) {
    function scrollPosIndicator() {
		var line = document.getElementById("scrollLine"),
			pos = window.pageYOffset,
			height = document.body.clientHeight - window.innerHeight,
			scrolled = (pos / height) * 100;

		line.style.width = (scrolled + '%')
	}
	
	window.addEventListener("scroll", scrollPosIndicator);
}(this, this.document));
