
function progress(percent) {
	$("#my-progress-bar").attr('style', 'width:'+ Number(percent)+'%')
}
function getProgressPercent() {
	return $("#my-progress-bar").width() / $('#my-progress-bar').parent().width() * 100;
}

function onePercentButton(data) {
	var calculate_percentage = getProgressPercent() + 1;
	progress(calculate_percentage)
}

function threePercentButton(data) {
	progress(getProgressPercent() + 3)	
}

function sevenPercentButton(data) {
	progress(getProgressPercent() + 7)
	
}

// ивент нажатия на кнопку

function init() {
	$("#button-1").click(onePercentButton)
	$("#button-3").click(threePercentButton)
	$("#button-7").click(sevenPercentButton)
}

//загружает хтмл

$(document).ready(init) 