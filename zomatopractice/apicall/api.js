var url = "https://developerfunnel.herokuapp.com/location";

const getLocation = () => {

    // *************ES6

    fetch(url).then((res) => res.json()).then((data) => {
        for (i = 0; i < data.length; i++) {
            let element = document.createElement("p");
            let text = document.createTextNode(data[i].city_name);
            element.appendChild(text)
            document.getElementById("output").appendChild(element)
        }
    })

}


    // *************another way conventional syntax

    // fetch(url, { method: 'Get' })
    //     .then(
    //         function (res) {
    //             return res.json()
    //         }
    //     )
    //     .then(function (data) {
    //         return console.log(data)
    //     })   
    // }