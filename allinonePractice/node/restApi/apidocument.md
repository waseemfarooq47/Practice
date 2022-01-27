Page1(Home Page) 
> List Of City (https://kashkart.herokuapp.com/location)
local(http://localhost:6661/location)
(this will return all the city) >>>>>>>>done

> Restaurant wrt to city(https://kashkart.herokuapp.com/restaurants?city=2)
local(http://localhost:6661/restaurants?city=3)
(on the basis city return restaurants) >>>>>>>>done 

> List of all meal (https://kashkart.herokuapp.com/restaurants?mealtype)
local(http://localhost:6661/mealtype)
(return all the meal types) >>>>>>>> done

Page2(Listing Page)
> Find Restaurant on the basis mealType (https://kashkart.herokuapp.com/filter/2) 
local(http://localhost:6661/filter/2)
(this will return all the restaurant of particular meal)
()

> Filter
>> Cuisine Filter (https://kashkart.herokuapp.com/filter/3?cuisine=3)
local(http://localhost:6661/filter/3?cuisine=3)
(Search on basis of mealtype and cuisine)()

>> cost Filter (https://kashkart.herokuapp.com/filter/3?hcost=1000&lcost=300)
local(http://localhost:6661/filter/3?hcost=1000&lcost=300)
(Search on basis of mealtype and cost)

>> sort filter(https://kashkart.herokuapp.com/filter/1?lcost=200&hcost=1000&cuisine=2&sortKey=-1)
local(http://localhost:6661/filter/1?lcost=200&hcost=1000&cuisine=2&sortKey=-2)
(Price high to low and Low to High)

>> Cuisine + Cost(https://kashkart.herokuapp.com/filter/1?lcost=200&hcost=1000&cuisine=2)
local(http://localhost:6661/filter/1?lcost=200&hcost=1000&cuisine=2)
((Search on basis of mealtype and cuisine + cost)

Page3(Details Page)
> Get the details of restaurant on basis of Id(https://kashkart.herokuapp.com/restaurants/3)
(http://localhost:6661/restaurants/3)  >>>>>>>>>>>>>>>>>>done

> Menu wrt to restaurant (https://kashkart.herokuapp.com/menu/2)
local(http://localhost:6661/menu/2)
(return all items of menu for particular restaurant)





****POST CALL*****

Page4(Summary Page)
> Menu wrt to all ids (post)> (https://kashkart.herokuapp.com/menuItems)
local(http://localhost:6661/menuItems)
(provides item in basis of id)

> Post the order
(Insert order details in db)>(https://kashkart.herokuapp.com/placeOrder)
local(http://localhost:6661/placeOrder)
()
  


/// update order with payment detail(https://kashkart.herokuapp.com/updateStatus/11)
local(http://localhost:6661/updateStatus/11)
"status":"delivered",
"date":"2021-08-19%2021:32:37.0",
"bank_status":"TXN_SUCCESS",
"bank":"Bharat%20Bank"
()

/// delete orders(https://kashkart.herokuapp.com/deleteOrder)
local(http://localhost:6661/deleteOrders)
()


Page5(Order Page)(https://kashkart.herokuapp.com/orders)
> List all the order placed >>>>>>>>>>>>>>>>>>done
(http://localhost:6661/orders)