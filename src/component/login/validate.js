


//function to check if the email input is valid

export function validateEmail(rEmail) {
    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(rEmail).toLowerCase());
}// end of function validateEmail

//function to check if the user input is valid 
export function validateUser(rUser) {
    if(rUser.length > 3){return true; }
    else {alert('The username have to be atleast 4 digits long')}
    return false;
}// end of function validateEmail


//function to check if the password input is valid 
export function validatePassword(rPass) {
	var p = rPass;
	if (p.length < 2) {
        alert ("Please enter your Password\nMust contain an uppercase letter\nMust contain a number"); return false;
    }
    if (p.search(/[A-Z]/) < 0) {
        alert ("Your password must contain at least one Uppercase letter.");return false;
    }
    if (p.search(/[0-9]/) < 0) {
        alert ("Your password must contain at least one digit.");return false;
    }
    return true;
}// end of function validatePassword
 

