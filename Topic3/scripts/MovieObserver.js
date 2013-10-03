function MovieObserver(){
	document.addEventListener('Playing', function playingEventHandler(e) { console.log('Playing: ' + e.detail);	}, true);

	document.addEventListener('Stopped', function stoppedEventHandler(e) { console.log('Stopped: ' + e.detail);	}, true);
}
