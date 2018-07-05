(function (window, document) {
    function scrollPosIndicator() {
		var line = document.getElementById("scrollLine"),
			pos = window.pageYOffset,
			height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
			scrolled = (pos / height) * 100;

		line.style.width = (scrolled + '%')
	}
	
	window.addEventListener("scroll", scrollPosIndicator);
}(this, this.document));
