var anchor = 0;
var anchorList = [];
var $html = document.getElementById('html');
var $listAcr = document.getElementById('listAcr');

function goTop() {
	let pagePosition = $('html').scrollTop();
	let topTime = pagePosition+200;
	$('html').animate({scrollTop: $('html').offset().top}, topTime);
}

function addAnchor(){
	let pagePosition = $('html').scrollTop();
	// anchorList[anchor] = pagePosition;
	let node = document.createElement('LI');
	node.setAttribute('value',pagePosition);
	let  text = document.createTextNode(anchor);
	node.appendChild(text);
	$listAcr.appendChild(node);
	anchor++;
}

function callAnchor(){
	
}

function eatAnchor(){
	
}


// window.location.href = baiduUrl;

// document.onkeydown = function(event) {
// 	var ctrlKey = event.ctrlKey || event.metaKey;
//     var keyCode = event.keyCode || event.which || event.charCode;
//     if(ctrlKey && keyCode === 38) {
//         document.getElementById('top').click();
//     }
//     if(ctrlKey && keyCode === 40) {
//         document.getElementById('bottom').click();
//     }
//     return false;
// };

// $(document).keypress(function(event){
//     if(event.ctrlKey && event.which === 84){
//     	event.preventDefault();
// 		$('top').click();
//     }
// });

function enter(){
	if (event.which) {
		if(event.which == 13) search();
	}
}

var baiduUrl="https://www.baidu.com/s?wd=";
var biliUrl = "https://search.bilibili.com/all?keyword=";
var bingUrl = "https://cn.bing.com/search?q="; 
function search(){
	let selectedVal = $('#selectEngine').val();
	let inputVal =  encodeURIComponent($('#searchBox').val());
	console.log(selectedVal);
	if (selectedVal==1) {
		selectedUrl = baiduUrl;
	}else if (selectedVal==2) {
		selectedUrl = bingUrl;
	}else if (selectedVal==3) {
		selectedUrl = biliUrl;
	}
	let url = selectedUrl + inputVal;
	window.open(url);
}
