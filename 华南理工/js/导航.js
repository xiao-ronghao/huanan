var oFix = document.getElementById('rightfixed');
var oUl = oFix.getElementsByTagName('ul')[0];
var oLi = oUl.getElementsByTagName('li');
oFix.onmouseover = function() {
	for (var i = 0; i < oLi.length; i++) {
		oLi[i].style.transition = "1s " + i * 0.1 + "s";
		oLi[i].style.left = '0px';
	}
}

oFix.onmouseout = function() {
	for (var i = 0; i < oLi.length; i++) {
		oLi[i].style.transition = "1s " + i * 0.1 + "s";
		oLi[i].style.left = '100px';
	}

}
