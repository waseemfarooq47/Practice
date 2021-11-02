var url = "http://localhost:7889/stocks";
var url2 = "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash"

const stockPrice =()=>{
    fetch(url,{method:"Get"})
    .then((res)=>res.json())
    .then((data1)=>{
        console.log(data1)
        data1.map((api1)=>{
            fetch(`${url2}/${api1.name}`).then(res => res.json())
            .then(data2 =>{
                console.log(data2)
                var element=`
                <div class="col">
                <div class="card">
                <img src="${api1.logo}" class="card-img-top" alt="${api1.name}" style="height: 200px;">
                <div class="card-body">
                    <h5 class="card-title">${data2.data.company}</h5>
                    <h6 class="card-text">HN  : ${data2.data.HN},${data2.data.SC_SUBSEC}</h6>
                    <h6 class="card-text">High Price : ${data2.data.HP}</h6>
                    <h6 class="card-text">Low Price : ${data2.data.LP}</h6>
                    <span>Price Current:  ${data2.data.pricecurrent}</span> &nbsp;&nbsp; <span>Price Current:  ${data2.data.pricechange}</span>
                    <h6 class="card-text">Price Percentage % : ${data2.data.pricepercentchange}</h6>
                </div>
                </div>
            </div>
                `
                $('#showCards').append(element);
            })
        })
    })
}
