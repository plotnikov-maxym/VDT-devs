function showBody() {
	window.document.body.style.display = 'block';
}

function hideBody() {
	window.document.body.style.display = 'none';
}

function init() {

	window.history.back = function() {
		window.greentea.onWebpageEvent(3, '');
	};

	window.history.forward = function() {
		window.greentea.onWebpageEvent(4, '');
	};
	
	window.history.go = function(step) {
		window.greentea.onWebpageEvent(5, step);
	}
}

var mLastTouchStartLeft;
var mDomMoveDistanceX;
var regCssWebkitTransform = "-webkit-transform";
var touchMoveInPage = false;

function touchstartHandler(event){
	mLastTouchStartLeft = event.target.getBoundingClientRect().left;
	mDomMoveDistanceX = 0;
	touchMoveInPage = false;
}

function touchmoveHandler(event){

	if(!touchMoveInPage){

		if(isMoving()){
			window.greentea.onWebpageEvent(2, '3');
			touchMoveInPage = true;
		}
	}
}

function isMoving() {
	if (checkMoveForLevel(5)) {
		return true;
	}
	if (checkMoveForLevel(6)) {
		return true;
	}
	return false;
}

function checkMoveForLevel(level) {
	nodeStylesString = getNodeStylesString(event.target, level);
	mDomMoveDistanceX = event.target.getBoundingClientRect().left - mLastTouchStartLeft;

	if(nodeStylesString.match(regCssWebkitTransform) != null || Math
			.abs(mDomMoveDistanceX) > 1){
		return true;
	}
	return false;
}

function getNodeStylesString(node, level){
	var nodeStylesString = '';
	var curNode = node;
	for(i=0; i<level; i++){
		var nodeStyle = curNode.getAttribute('style');
		nodeStylesString += nodeStyle;
		nodeStylesString +='|';
		curNode = curNode.parentNode;
	}
	return nodeStylesString;
}

function addTouchEventListener(){
	
	document.body.addEventListener('touchstart', touchstartHandler, true); 
	
	document.body.addEventListener('touchmove', touchmoveHandler, true); 
	
	// document.body.addEventListener('touchend', touchendHandler, true);
}

function getNodeTagsString(node, level){
	var nodeTagsString = '';
	var curNode = node;
	for(i=0; i<level; i++){
		var nodeHtml = curNode.outerHTML;
		var index = nodeHtml.indexOf('>');
		if(index >= 0){
			nodeTagsString += nodeHtml.substring(0, index+1);
			nodeTagsString +='#';
		}
		curNode = curNode.parentNode;
	}
	return nodeTagsString;
}

init();