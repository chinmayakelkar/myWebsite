var main=function(){
	
	var firebaseref = new Firebase("https://flickering-torch-92.firebaseIO.com/");

				$("#btn-login").on('click', function() 
{
        var email = $("#email-login").val();
        var password = $("#pass-login").val();
        firebaseref.authWithPassword({
            email: email,
            password: password
        }, 
        function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
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
