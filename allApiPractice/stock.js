var url1=" http://localhost:3456/stocks";
var url2 = "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash";

fetch(url1)
.then((res)=>res.json())
.then((data)=>{
    data.map((item1)=>{
        fetch(`${url2}/${item1.name}`).then((res)=> res.json()).then((data2)=>{
            console.log(data2)
            var element=`
            <div class="col">
                <div class="card h-100">
                    <img src="${item1.logo}" class="card-img-top" alt="..." style="height:250px">
                    <div class="card-body">
                        <h5 class="card-title">${item1.name}  || ${data2.data.HN}</h5>
                        <p class="card-text">High price ${data2.data.HP}  ||  Low price ${data2.data.LP}</p>
                    </div>
                </div>
            </div>
            `
            $('#ccard').append(element);

        })
    })
})