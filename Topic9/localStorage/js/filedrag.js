(function() {

	// getElementById
	function $id(id) {
		return document.getElementById(id);
	}

	// output information
	function Output(msg) {
		var m = $id("filedrag");
		m.innerHTML = msg + m.innerHTML;
	}

	// file drag hover
	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();		
	}

	// file selection
	function FileSelectHandler(e) {

		// cancel event and hover styling
		FileDragHover(e);

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			ParseFile(f);
		}

	}

	// output file information
	function ParseFile(file) {		

		// display text
		if (file.type.indexOf("text") == 0) {
			var reader = new FileReader();
			reader.onload = function(e) {
				Output(
					"<pre>" +
					e.target.result.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
					"</pre>"
				);
			}
			reader.readAsText(file);
		}

	}

	// initialize
	function Init() {
		
		var	filedrag = $id("filedrag"),
			submitbutton = $id("submitbutton");

		// is XHR2 available?
		var xhr = new XMLHttpRequest();
		if (xhr.upload) {

			// file drop
			filedrag.addEventListener("dragover", FileDragHover, false);
			filedrag.addEventListener("dragleave", FileDragHover, false);
			filedrag.addEventListener("drop", FileSelectHandler, false);
			filedrag.style.display = "block";
			
		}

	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}


})();