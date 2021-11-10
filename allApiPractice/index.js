var url = "https://developerfunnel.herokuapp.com/location";
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city=";

const getCity=()=>{
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        data.map((item)=>{
           var element = document.createElement("option");
           var text = document.createTextNode(`${item.city_name}`);
           element.appendChild(text);
           element.value=item._id;
           document.getElementById("newcity").appendChild(element)
        })
    })
}



var getHotels=()=>{
    var selected= document.getElementById("newcity").value;
    var hotel= document.getElementById("hotels");
    while (hotel.length > 0) {
        hotel.remove(0);
    }
    fetch(`${hotelUrl}${selected}`)
    .then((res)=> res.json())
    .then((data)=>{
        data.map((item)=>{
            var element = document.createElement("option");
           var text = document.createTextNode(`${item.name} ${item.locality}`);
           element.appendChild(text);
           document.getElementById("hotels").appendChild(element)
        })
    })
}