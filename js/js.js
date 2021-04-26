var web_style = $("#web_style").val();
var valine_appid = $("#valine_appid").val();
var valine_appKey = $("#valine_appKey").val();

new Valine({
	el: '#vcomments',
	appId: valine_appid,
	appKey: valine_appKey,
	placeholder: '请输入内容...',
	avatar: "wavatar"
})

document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelectorAll('pre').forEach((block) => {
		hljs.highlightBlock(block);
	});
});

function setCookie(key, value) {
	localStorage.setItem(key, value);
}

function getCookie(key) {
	var data = localStorage.getItem(key);
	return data
}

function updateStyle() {
	if (getCookie("style") == "white") {
		$("#footer").attr("style", "color: #51525d;");
		$(".flink").attr("style", "color: #51525d;");
		$(".ba").attr("style", "color: #51525d;");
		$("#bodyx").attr("class", "bg_while");
		$("#update_style").attr('checked', false);
		// $(".aplayer-lrc").attr("style","")
	} else {
		$("#footer").attr("style", "");
		$(".flink").attr("style", "");
		$("#bodyx").attr("class", "");
		$(".ba").attr("style", "");
		$("#update_style").attr('checked', true);
		// $(".aplayer-lrc ").attr("style","text-shadow: -1px -1px 0 #fff;")
	}
}

if (getCookie("style") == null) {
	setCookie("style", web_style)
	updateStyle();
} else if (getCookie("style") == "white") {
	setCookie("style", "white")
	updateStyle();
} else if (getCookie("style") == "black") {
	setCookie("style", "black")
	updateStyle();
}

$("#update_style").change(function() {
	var style = $("#update_style").is(':checked');
	if (style) {
		setCookie("style", "black")
		updateStyle();
	} else {
		setCookie("style", "white")
		updateStyle();
	}
});

var time0 = new Date().getTime()
$(document).ready(function(){
	var len=0;
	doc = document.getElementsByClassName("post-content")[0].innerText;
	var chinese = /[\u4e00-\u9fa5]/g;
	len+=doc.match(chinese).length
	console.log(doc.match(chinese).length);
	var word = /([\u0041-\u005a\u0061-\u007a][\u0041-\u005a\u0061-\u007a]*)/g;
	console.log(doc.match(word).length);
	len+=doc.match(word).length
	document.getElementById("count").innerText = '　'+len+' characters ' + Math.floor(len/6)+' seconds';
});

function formatTime(time) {
	let min = parseInt(time/60);
	let hour = parseInt(min/60) ;
	let hourStr = ''+hour + ' h ';
	let minStr = ''+min%60 + ' m ';
	let secStr = ''+parseInt(time%60) +' s';
	console.log(hour)
	if (hour!=0){
		return hourStr+minStr+secStr;
	} else if(hour==0 && min!=0){
		return minStr+secStr;
	} else {
		return secStr;
	}
}

done = false;
$(document).scroll(function() {
    sTop = $(this).scrollTop(); //获取滚动条的位置
    var sh = $(window).height();//视口高度
    var ft = $("#timer").offset().top//指定元素距离文档顶部高度
    // 滚动条位置 大于 指定元素减去 视口高度时
    if (!done) {
		document.getElementById("timer").innerText = '　read used '+formatTime((new Date().getTime() - time0)/1000);
    }
    if (sTop > (ft - sh/2) && !done) { //当底部出现在视口时 触发
		// document.getElementById("timer").innerText = (new Date().getTime() - time0)/1000;
		// console.log(done);
		done = true;
    }
});
