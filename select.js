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

/*function validate(){
	var btn = document.getElementById('btnlogin');
	
	btn.onclick = function(){
		
		
		var user_nm = document.getElementById('user_name').value;
		var passwd = document.getElementById('passwd').value;
		if(user_nm == 'root' && passwd == 'root'){
			
						
			
			alert();
			swal({   title: "Welcome?",
				  text: "You have sucessfully loggedIN!",
				  type: "success",   
				  showCancelButton: true,
				  confirmButtonColor: "#A6FFA6",
				  confirmButtonText: "OK!",
				  closeOnConfirm: false },
				 function(){
				window.location.href = "dashboard.html";
					 });
				
		
		}
		else{
			return false;
		}
	}
}



*/
function regVal(){
	
	var email = document.getElementById('email');
	var emailRegex = /^\w*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	
	document.getElementById('register').onclick = function(){
		if(emailRegex.test(email.value)){
			action = "dashboard.html";
		}
		else{
			return false;
		}
	}
}

window.onload = function () {
	/*swal({   title: "Like-us!",   text: "thank you for using like us on  www.fb.com/aiktcprogrammersclub " ,   type: "info",   showCancelButton: true,   confirmButtonColor: "#DD6B55",      closeOnConfirm: true });
	*/document.getElementById("login").style.display = "none";
	document.getElementById("register").style.display = "none";
	myselect();
	validate();
	regVal();
	};

