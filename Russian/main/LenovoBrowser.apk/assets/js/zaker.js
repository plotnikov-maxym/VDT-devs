removeSourceWebButton();

var selectInput;

function removeSourceWebButton() {
	if(document != null && document.body != null){
		var linkElements = document.getElementsByTagName("a");
		for(var i = 0; i < linkElements.length; i++) {
			var link = linkElements[i];
			if (link.innerHTML == "查看原文") {
				var parentDiv = link.parentNode;
				parentDiv.parentNode.removeChild(parentDiv);
			}
		}
	}
}