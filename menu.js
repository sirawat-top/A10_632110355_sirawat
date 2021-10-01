let reg_id = /^\d+$/;
let reg_name= /^[a-zA-Z]$/;
let reg_price = /^\d+$/;
let reg_quantity=/^\d+$/;
let reg_search = /^[a-zA-Z]+$/

var menu = new Array();
    menu.push({ menu_id : 1, menu_name:"ramen",menu_price : 60, menu_quantity:"10"});
    menu.push({ menu_id : 2, menu_name:"curry",menu_price : 50, menu_quantity:"10"});
    menu.push({ menu_id : 3, menu_name:"tonkatsu",menu_price : 70, menu_quantity:"10"});
    menu.push({ menu_id : 4, menu_name:"sushi",menu_price : 55, menu_quantity:"10"});
 
    console.table(menu);
var promo = new Array();
    promo.push({pro_id:1,menu_name:"odeng",quantity:"2",promo_price:95});
    promo.push({pro_id:1,menu_name:"ramen",quantity:"2",promo_price:110});

    console.table(promo);


searchType = (key) => {
    let check_search = reg_search.test(key);
    if (check_search == true) {
        let answer = menu.filter(type => (type.type_name.includes(key)))
        console.table(answer)
        return [answer.length, answer]
    } else {
        throw 'No have menu tyr again'
    }
        
}

deletemenu = (id) => {
    if ( reg_id.test(id) == true ) {
        let similar_id = false;
        let achieve_index;
        menu.forEach((menu) => {
            if (menu.menu_id == id) {
                similar_id = true;
            }
        })
        achieve_index = menu.findIndex(menu => menu.menu_id == id)
        console.log(achieve_index);
        if (similar_id == true) {
                
            room.splice(achieve_index,2); 
            return room;
        } else if (similar_id == false) {
            throw "no have id menu";
        }
    } else {
        throw "Wrong name ";
    }
}


addmenu = (name, price, quantity) => {
    if ( (reg_name.test(menu_name) && reg_price.test(menu_price) && reg_quantity.test(menu_quantity) == true ) 
    ){
        let similar_number = false;
        menu.forEach((menu) => {
            if(menu.name == name) {
                console.log("already have menu try again");
                similar_number = true;
            } 
            
        })
        if (similar_number == false) {
            id++;
            menu.push({ menu_id:id,menu_name:name, menu_price: price, menu_quantity: quantity});
            checkType();
            return menu;
        } else if (similar_number == true) {
            throw "already have menu try again";
        }
    } else {
        throw "Wrong information try agin";
    }
        
}    
addpromo=(name,price,quantity)=>{
    if((reg_name.test(menu_name) && reg_price.test(promo_price) && reg_quantity.test(quantity) == true ))
    {
        let similar_number = false;
        promo.forEach((promo) => {
            if(menu.name == name) {
                console.log("already have menu try again");
                similar_number = true;
            }
            if(menu.price < price){
                console.log("Price higher than menu")
                similar_number = true;
            } 
        })
        if (similar_number == false) {
            id++;
            promo.push({ pro_id:id,menu_name:name, promo_price: price, quantity: quantity});
            checkType();
            return promo;
        } else if (similar_number == true) {
            throw "already have menu try again";
        }
    } else {
        throw "Wrong information try agin";
    }
    

    
}

showMenu = () => {
    console.table(menu)
}
showPromo=()=>{
    console.table(promo)
}

module.exports={
    searchType: searchType,
    addmenu: addmenu,
    showMenu: showMenu,
    deletemenu: deletemenu,
    menu:menu,
    showPromo:showPromo,
    addpromo:addpromo,
    promo:promo
}