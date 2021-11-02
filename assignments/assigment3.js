class restaurantManager {
    restaurantList = [
        {
            id: 1,
            restname: "punjabi Tadka",
            city: "delhi",
            address: "jamia masjid ",
        },

        {
            id: 2,
            restname: "mughal darbar",
            city: "srinagar",
            address: "lalchowk near gantaghar",
        },
        {
            id: 3,
            restname: "parsa restaurant",
            city: "abiguzar",
            address: "lalchowk near bund",
        },
        {
            id: 4,
            restname: "amigos",
            city: "rajbagh",
            address: "gogji bagh near amar singh college",
        },
    ]

    printResnames = () => {
        return this.restaurantList.map((data) => {
           return data.restname
        })
    }

    restfilter = (cityName) => {
        return this.restaurantList.filter((data2) => {
            return data2.city === cityName
        })
    }
}


// var res= new restaurantManager();
// res.printResnames();
// res.restfilter("rajbagh")


var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76,
    'Above 5000': 11
};


// sum of orders
// var result = 0;
// function sumOrder(){
//     for (keys in orderData) {
//         result +=Number(orderData[keys])
//         // console.log(result)
//     }
    
// }
// sumOrder();


// percentage
function percentageOrder(orderData){
    var result2=0;       
    for (ord in orderData){
         result2 =result2+Number(orderData[ord]);
    }

    var output=[];
    var count=0; 
    // console.log(result2)
    for (por in orderData){
        var  perData =orderData[por]/result2*100;
        count =count+1;
        var myObj={};
        myObj.id=count;
        myObj.order=por;
        myObj.order_percentage=perData;
        myObj.restaurant="punjabi tadka";
        output.push(myObj)
    }
        return output;
}
percentageOrder();




