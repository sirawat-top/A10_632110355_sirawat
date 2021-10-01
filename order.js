let reg_id = /^\d+$/;


var order = []
order.push({id: 1, name_cus:"taiji", name_menu: "ramen", quantity:2 , price:120,promo:0});
order.push({id: 2, name_cus:"yamato", name_menu: "tonkatsu", quantity:2 , price:140,promo:0});
order.push({id: 3, name_cus:"hikari", name_menu: "curry", quantity:2 , price:100,promo:0});

console.table(order);

showOrder = (id) => {
    let check_id = reg_id.test(id)
   
    let index = 0
    let saveIndex;
    console.log(check_id)
    if(check_id == true) {

        order.forEach((order) => {
            if (order.id == id) {
                saveIndex = index;
           
            }
            index++
        });   
}
}
showAllorder = () => {
    return order;
}
module.exports = {
    showOrder: showOrder,
    showAllorder: showAllorder,
    order: order
}