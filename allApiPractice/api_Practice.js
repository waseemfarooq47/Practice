var url = "https://developerfunnel.herokuapp.com/location";
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city=";

// merging two down drops//
fetch(url,{"method":"get"})
.then(res=>res.json())
.then(data =>{
    data.map((places)=>{
        console.log(places);
        var element=document.createElement("option");
        var text=document.createTextNode(`${places.city_name}`);
        element.appendChild(text);
        element.value=places._id;
        document.getElementById("locateCity").appendChild(element);
    })
})



const getHotels=()=>{
    var selected=document.getElementById("locateCity").value;
    var hh=document.getElementById("famousHotels");

    while(hh.length>0){
        hh.remove(0);
    }

    fetch(`${hotelUrl}${selected}`,{method:"GET"}).then((res)=> res.json())
    .then((hotelData)=>{
        console.log(hotelData);
        hotelData.map((hotels)=>{
            console.log(hotels);
            var element = document.createElement("option");
            var text=document.createTextNode(`${hotels.name}${selected}`);
            element.appendChild(text);
            document.getElementById("famousHotels").appendChild(element)

        })
    })
}


// 