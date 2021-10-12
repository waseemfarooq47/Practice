var formvalid = () => {
    if (document.myForm.Fname.value == "") {
        // alert(" Please provide Firstname");
        document.getElementById("errormsg1").style.display = "block";
        document.myForm.Fname.focus();
        return false;
    } else if (document.myForm.Lname.value == "") {
        document.getElementById("errormsg1").style.display = "none";
        document.getElementById("errormsg2").style.display = "block";
        document.myForm.Lname.focus();
        return false;
    } else if (document.myForm.Contact.value == null || document.myForm.Contact.value == "") {
        document.getElementById("errormsg1").style.display = "none";
        document.getElementById("errormsg2").style.display = "none";
        document.getElementById("errormsg3").style.display = "block";
        document.myForm.Contact.focus();
        return false;
    } else if (document.myForm.Password.value == null || document.myForm.Password.value == "") {
        document.getElementById("errormsg1").style.display = "none";
        document.getElementById("errormsg2").style.display = "none";
        document.getElementById("errormsg3").style.display = "none";
        document.getElementById("errormsg4").style.display = "block";
        document.myForm.Password.focus();
        return false;
    }

    else {
        return true;
    }
}