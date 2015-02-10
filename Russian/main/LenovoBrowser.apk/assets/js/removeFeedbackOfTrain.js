removeFeedbackButton();

var selectInput;

function removeFeedbackButton() {
	if(document != null && document.body != null){
		var linkElements = document.getElementsByTagName("a");
		for(var i = 0; i < linkElements.length; i++) {
			var link = linkElements[i];
			if (link.innerHTML.indexOf("馈") >= 0) {
				var parentDiv = link.parentNode;
				parentDiv.parentNode.removeChild(parentDiv);
			}
		}
	}
}