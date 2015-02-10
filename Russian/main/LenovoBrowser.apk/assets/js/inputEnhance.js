inputImprove();

var selectInput;

function inputImprove() {
	if(document != null && document.body != null){
		var inputElements = document.getElementsByTagName("input");
		for(var i = 0; i < inputElements.length; i++) {
			if (inputElements[i].type == "text" || inputElements[i].type == "password") {
				//inputElements[i].style.background="#ffff00";
				var inputElement = inputElements[i];
				inputElements[i].onclick = function(){ inputClick(this) };
			}
		}
	}
}

function inputClick(input) {
	selectInput = input;
	if (selectInput.type == "text") {
		window.input_enhance.showEnhanceInput(input.value, 0);
	}
	if (selectInput.type == "password") {
		window.input_enhance.showEnhanceInput(input.value, 1);
	}
}

function setInputValue(value) {
	if (selectInput != null) {
		selectInput.value = value;
	}
}