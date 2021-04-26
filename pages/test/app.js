function vlog(arg) {
	$("#vconsole")[0].innerHTML+=arg+'\n';
}

document.oncontextmenu=function(e){
	e.preventDefault();
};
function showDictionary(){
	//document.getElementById("vconsole").innerHTML="az"
	//$("#vconsole")[0].innerHTML="az"
	// vlog($("#frame").attr("class"))
	$("#frame").attr("class", $("#frame").attr("class")=="frame"?"frameHide":"frame");
	$("#pullupInner").attr("style",$("#frame").attr("class")=="frame"?"transform:rotate(180deg);":"");
}
