// var hidecoupon = () => {
//     var hide = document.getElementById('offercoupon');
//     hide.style.display = "none";
// }

// function showcoupon() {
//     var show = document.getElementById('offercoupon');
//     show.style.display = "block";
// }

// var applyCode = () => {
//     var codes = document.getElementById("couponcode").innerText;
//     var inp = document.getElementById("couponnumber").value;

//     // alert(codes)

//     if (codes === inp) {
//         alert("code applied");
//         var cou_cover = document.getElementById("cou-sect")
//         var apply = document.getElementById("appliedcoupon");
//         var smsg = document.getElementById("succes-msg");
//         apply.style.display = "block";
//         smsg.style.display = "block";
//         cou_sect.style.display = "none";


//     } else if (inp == "") {
//         alert("Please enter code");
//     }
//     else {
//         var smsg = document.getElementById("succes-msg");
//         alert("Wrong code Entered..")
//         document.getElementById("couponnumber").value = "";
//     }
// }


// dyannamic using API call

var url = "https://developerfunnel.herokuapp.com/location";
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city=";
var QuickUrl = "https://developerfunnel.herokuapp.com/booking"


// another way using Async function

async function getCity() {
    var response = await fetch(url);
    var data = await response.json();

    data.map((items) => {
        var element = document.createElement("option");
        var text = document.createTextNode(`${items.city_name}`);
        element.appendChild(text);
        element.value = items._id;
        document.getElementById("city").appendChild(element);
    })
}




// dropdown wrt parent
const getHotels = () => {
    var selected = document.getElementById("city").value; //which is selected 
    var eatery = document.getElementById("eatery-items");
    while (eatery.length > 0) {
        eatery.remove(0);
    }


    fetch(`${hotelUrl}${selected}`, { method: "GET" }).then((res) => res.json()).then((data) => {
        data.map((items) => {
            var element = document.createElement("option");
            var text = document.createTextNode(`${items.name}${items.locality}`);
            element.appendChild(text)
            document.getElementById("eatery-items").appendChild(element);
        })
    })
}


// dynamic tiles

const QuickSearch = () => {
    fetch(QuickUrl, { method: "GET" }).then((res) => res.json())
        .then((data) => {
            // console.log(data)
            data.map((quick) => {
                var block = `
                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3 ">
                <div class="card mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-4 side-by">
                                        <img src="${quick.image}">
                                    </div>
                                    <div class="col-md-8 side-by">
                                        <div class="card-body">
                                            <h5 class="card-title">${quick.name}</h5>
                                            <p class="card-text">Best ${quick.name} in the town. Tasty the differnce!!
                                            </p>
                                            <p class="card-text"><small class="text-muted">Today's Best Offer</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                `
                $("#mainCardCover").append(block)
            })
        })
}


// best hotel cards
const bestHotel = () => {
    fetch(hotelUrl, { method: "GET" }).then((res) => res.json()).then((data) => {
        data.map((resto) => {
            var restaurant = `
            <div class="col-lg-3 col-md-6 col-sm-12  mt-5 ">
                        <div class="card">
                            <img src="${resto.thumb}" class="card-img-top  ctop" alt="restaurant1">
                            <div class="card-body">
                                <h5 class="card-title text-center">${resto.name}</h5>
                                <p class="card-text">Located at ${resto.locality}</p>
                                <span class="search-subtagd-block"><i class="fas fa-rupee-sign"></i> ${resto.cost}</span>
                                <small class="ratings d-block ">rating : 3 stars</small>
                                <small class="ratings d-block ">
                                    <i class="fa fa-star fill"></i>
                                    <i class="fa fa-star fill"></i>
                                    <i class="fa fa-star fill"></i>
                                    <i class="fa fa-star unfill"></i>
                                    <i class="fa fa-star unfill"></i>
                                </small>
                                <a href="#" class="btn btn-success orderbtn mt-3">
                                    <i class="fa fa-shopping-cart me-3" aria-hidden="true"></i>Order now
                                </a>
                            </div>
                        </div>
                    </div>
            `
            $('#bestRestaurant').append(restaurant)
            // document.getElementById("bestRestaurant").innerHTML(restaurant)
        })
    })
}