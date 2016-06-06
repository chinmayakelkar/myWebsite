var main=function () {
	var firebaseref = new Firebase("https://flickering-torch-92.firebaseIO.com/");
	
$("#btn-register").on('click', function() 
{
	var email = $("#register-email").val();
	var password = $("#register-password").val();
	firebaseref.createUser({
		email: email,
		password: password
	},function(error, userData) {
		if (error) {
			console.log("Error creating user:", error);
		} 
		else {
			console.log("Successfully created user account with uid:", userData.uid);
			//additionally, you can log the user in right after the signup is successful and add more data about the user like name etc.              
		}
	});
});			
var authDataCallback = function(authData) 
{
        //authData is the object sent by Firebase in the callback.
        if (authData) {
            console.log("User " + authData.uid + " is logged in");
        } 
        else {
            console.log("User is logged out");
        }
};

//register a callback for the change in Authentication Status
firebaseref.onAuth(authDataCallback);
};



$(document).ready(main);
