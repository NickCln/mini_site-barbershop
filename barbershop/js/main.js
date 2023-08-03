window.onload = function(){
	setTimeout(function(){

		document.body.classList.add('loaded');

		Draggable.create('.galary', {
			bounds: 'body',
			inertia: true
		});
	});
}