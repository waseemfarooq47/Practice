// var Add = () => {


//     let val1 = parseInt(document.getElementById("valbox1").value);
//     let val2 = parseInt(document.getElementById("valbox2").value);
//     if (val1 > 0 && val2 > 0) {
//         let res = val1 + val2
//         // alert(res)
//         document.getElementById("resultbox").value = res;
//     } else {
//         alert("please enter values")
//     }

// }

// function Sub() {
//     let val1 = parseInt(document.getElementById("valbox1").value);
//     let val2 = parseInt(document.getElementById("valbox2").value);
//     if (val1 > 0 && val2 > 0) {
//         let res = val1 - val2
//         // alert(res)
//         document.getElementById("resultbox").value = res;
//     } else {
//         alert("please enter values")
//     }

// }

// function Mul() {
//     let val1 = parseInt(document.getElementById("valbox1").value);
//     let val2 = parseInt(document.getElementById("valbox2").value);
//     if (val1 > 0 && val2 > 0) {
//         let res = val1 * val2
//         // alert(res)
//         document.getElementById("resultbox").value = res;
//     } else {
//         alert("please enter values")
//     }

// }
// function Div() {
//     let val1 = parseInt(document.getElementById("valbox1").value);
//     let val2 = parseInt(document.getElementById("valbox2").value);

//     if (val1 > 0 && val2 > 0) {
//         let res = val1 / val2
//         // alert(res)
//         document.getElementById("resultbox").value = res;
//     } else {
//         alert("please enter values")
//     }

// }
function Clear() {
    document.getElementById("resultbox").value = "";
}



// realtime calculator

var getumber = (num) => {
    let result = document.getElementById("resultbox").value += num;
    // alert(typeof (result))
}

var operations = () => {

    try {
        let result = document.getElementById("resultbox");
        result.value = eval(result.value);
    } catch {
        alert("Enter  valid input");
        document.getElementById("resultbox").value = "";
    }

}


var delChar = () => {
    let character = document.getElementById("resultbox");
    let rem = character.value;
    rem = rem.slice(0, -1);
    character.value = rem;
}