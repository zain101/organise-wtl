function myselect() {
	document.getElementById("my_check").onclick = function () {

		if (document.getElementById("my_check").checked) {
			document.getElementById("login").style.display = "block";
			document.getElementById("register").style.display = "none";
		}
	};
	document.getElementById("my_check1").onclick = function () {
		if (document.getElementById("my_check1").checked) {
			document.getElementById("register").style.display = "block";
			document.getElementById("login").style.display = "none";
		}
	};
}


window.onload = function () {
	document.getElementById("login").style.display = "none";
	document.getElementById("register").style.display = "none";
	myselect();
	};

