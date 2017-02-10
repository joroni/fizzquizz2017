/*

 // Store
 localStorage.setItem("lastname", "Smith");
 // Retrieve
 document.getElementById("result").innerHTML = localStorage.getItem("lastname");

 */






function check_storage(){
	/*

	 // Store
	 localStorage.setItem("lastname", "Smith");
	 // Retrieve
	 document.getElementById("result").innerHTML = localStorage.getItem("lastname");

	 */




	/*htmlspecialchars = function(s) {
		return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, "-");;
	};
*/

/** 1  ********************* Upon launch app will check if logged-in ****************/

		if (localStorage['userlogin']) {

			console.log('Authenticated User');
			window.location.replace("main.html");
		}else{
			console.log('Authentication Fail');
			//window.location.replace("index.html");
		}

	}


check_storage();
// register




/**  2A  ********************* If returning user, should fill username and passwrd ****************/
	function login(){
		var user_name_input = $('#user_name_input').val();
		var user_pass_input = $('#user_pass_input').val();


		$.post( base_url + '/index.php/loginuser', { username: user_name_input, password: user_pass_input })
			.done(function( data ) {
				if(data == 0){
					$('#login_username_error').show();
					$('#login_password_error').show();
				}else if(data == 1){
					localStorage.setItem("userlogin", user_name_input);
					get_Quiz_History();

					$.post( "http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver/index.php/servertime/")
						.done(function( data ) {
							localStorage.setItem("servertime", data);
						});


					console.log("get_Quiz_History");
					window.location.href = "main.html";

				}
			});


}


/**  2B  ********************* If new user, should sign up ****************/
function register(){

	var username = htmlspecialchars($('#reg_username').val());
	var password = htmlspecialchars($('#reg_password').val());
	var fname = htmlspecialchars($('#reg_fname').val());
	var lname = htmlspecialchars($('#reg_lastname').val());
	var email = htmlspecialchars($('#reg_email').val());
	var division = htmlspecialchars($('#division').val());
	var aunit = htmlspecialchars($('#aunit').val());
	var area = htmlspecialchars($('#reg_area').val());
	var lang = htmlspecialchars($('#reg_lang').val());
	/*var username = $('#reg_username').val();
	 var password = $('#reg_password').val();
	 var fname = $('#reg_fname').val();
	 var lname = $('#reg_lastname').val();
	 var email = $('#reg_email').val();
	 var division = $('#division').val();
	 var aunit = $('#aunit').val();
	 var area = $('#reg_area').val();
	 var lang = $('#reg_lang').val();*/

	if(username == '' || password == '' || fname == '' || lname == ''){

		if(username == ''){ $('#reg_username_err').show(); }
		if(password == ''){ $('#reg_password_err').show(); }
		if(fname == ''){ $('#reg_fname_err').show(); }
		if(lname == ''){ $('#reg_lastname_err').show(); }
		if(email == ''){ $('#reg_email_err').show(); }
		if(division == ''){ $('#reg_division_err').show(); }
		if(aunit == ''){ $('#reg_aunit_err').show(); }
		if(area == ''){ $('#reg_area_err').show(); }
		if(lang == ''){ $('#reg_lang_err').show(); }
		console.log('err empty field');
	}else{


		$.post( base_url + '/index.php/register/user', { username: username, password: password, fname: fname, lname: lname, email:email, division:division, aunit:aunit,
				area:area, lang:lang })
			.done(function( data ) {
				if(data == 0){
					if(username == ''){ $('#reg_username_err').show(); }
					if(password == ''){ $('#reg_password_err').show(); }
					if(fname == ''){ $('#reg_fname_err').show(); }
					if(lname == ''){ $('#reg_lastname_err').show(); }
					if(email == ''){ $('#reg_email_err').show(); }
					if(division == ''){ $('#division_err').show(); }
					if(aunit == ''){ $('#aunit_err').show(); }
					if(area == ''){ $('#reg_area_err').show(); }
					if(lang == ''){ $('#reg_lang_err').show(); }
					console.log('err empty field');
				}else if(data == 1){
					localStorage.setItem("username", username);
					localStorage.setItem("password", password);
					localStorage.setItem("email", email);
					localStorage.setItem("fname", fname);
					localStorage.setItem("lname", lname);
					localStorage.setItem("userlogin", username);
					localStorage.setItem("division", division);
					localStorage.setItem("aunit", aunit);
					localStorage.setItem("area", area);
					localStorage.setItem("lang", lang);



                    /**  2B  ********************* If signin/signup success, go to profile building ****************/


					window.location.href = "main.html";

				}else {
					alert(data);
					$('#reg_username').val('');
					$('#user_taken').show();
					console.log('Error, Username is not availble');
				}
			});



	}

}





