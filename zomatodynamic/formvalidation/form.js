const validForm = () => {
    let name = document.myForm.fname.value;
    let lname = document.myForm.lname.value;
    let email = document.myForm.email.value;
    let contact = document.myForm.contact.value;
    let pass = document.myForm.pass.value;
    let cpass = document.myForm.cpass.value;


    if (name.trim() === "" || name.trim() == null) {
        document.getElementById("fname").style.borderColor="red";
        document.getElementById("msg").innerHTML = "please enter firstname";
        return false;
    } else if (name.length < 5) {
         document.getElementById("fname").style.borderColor="red";
        document.getElementById("msg").innerHTML = "username must be greater than 5";
        return false;
    } else if (!isNaN(name)) {
         document.getElementById("fname").style.borderColor="red";
        document.getElementById("msg").innerHTML = "only number cannot be allowed username ";
        return false;
    }


    if (lname.trim() === "" || lname.trim() == null) {
         document.getElementById("fname").style.borderColor="green";
         document.getElementById("msg").innerHTML = "";
         document.getElementById("lname").style.borderColor="red";
        document.getElementById("msg2").innerHTML = "please enter lastname";
        return false;
    }

    if (email.trim() === "" || email.trim() == null) {
       document.getElementById("lname").style.borderColor="green";
         document.getElementById("msg2").innerHTML = "";
          document.getElementById("email").style.borderColor="red";
        document.getElementById("msg3").innerHTML = "Email cannot be blank";
        return false;
    }

    if(contact.trim()=="" || contact.trim()==null) {
        document.getElementById("email").style.borderColor="green";
        document.getElementById("msg3").innerHTML = "";
        document.getElementById("contact").style.borderColor="red";
        document.getElementById("msg4").innerHTML = "contact cannot be blank";
        return false;
    }else if(contact.length<=9){
        document.getElementById("email").style.borderColor="green";
        document.getElementById("msg3").innerHTML = "";
        document.getElementById("contact").style.borderColor="red";
        document.getElementById("msg4").innerHTML = "contact must be more than 10 digits";
        return false;
    }


    if(pass.trim() === "" || pass.trim() == null){
        document.getElementById("contact").style.borderColor="green";
        document.getElementById("msg4").innerHTML = "";
        document.getElementById("pass").style.borderColor="red";
        document.getElementById("msg5").innerHTML = "password cannot be blank";
        return false;
    }else if(pass.length<=5){
        document.getElementById("contact").style.borderColor="green";
        document.getElementById("msg4").innerHTML = "";
        document.getElementById("pass").style.borderColor="red";
        document.getElementById("msg5").innerHTML = "password must be more than 5 characters";
        return false;
    }

    if(cpass.trim() === "" || cpass.trim() == null){
        document.getElementById("pass").style.borderColor="green";
        document.getElementById("msg5").innerHTML = "";
        document.getElementById("cpass").style.borderColor="red";
        document.getElementById("msg6").innerHTML = "confirm password cannot be blank";
        return false;
    }else if(pass !== cpass  ){
        document.getElementById("pass").style.borderColor="green";
        document.getElementById("msg5").innerHTML = "";
        document.getElementById("cpass").style.borderColor="red";
        document.getElementById("msg6").innerHTML = "password and confirm password doesn't match";
        return false;
    }
}

const viewpass=()=>{
    let vpass=document.getElementById("pass");
    let eye =document.getElementById("vieweye");

    if(vpass.type=="password"){
        eye.classList.remove("bi-eye-slash-fill");
        eye.classList.add("bi-eye-fill");
        eye.style.color="green";
        vpass.type="text";

    }else if(vpass.type=="text"){
        eye.classList.remove("bi-eye-fill");
        eye.classList.add("bi-eye-slash-fill");
        document.getElementById("vieweye").style.color="red";
        vpass.type="password";
    }
    
}
