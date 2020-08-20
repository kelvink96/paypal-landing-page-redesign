document.addEventListener('DOMContentLoaded', function () {
	var dropdownElem = document.querySelectorAll('.dropdown-trigger');
	var instances = M.Dropdown.init(dropdownElem, null);

	var carouselElem = document.querySelectorAll('.carousel');
	var instances = M.Carousel.init(carouselElem, {
		indicators: true
	});

	var sideNavElem = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(sideNavElem, null);

	var collapsibleElem = document.querySelectorAll('.collapsible');
	var instances = M.Collapsible.init(collapsibleElem, null);
});
