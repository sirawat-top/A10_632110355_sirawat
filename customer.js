
let reg_id = /^\d+$/;



var customer = []
customer.push({id: 1,firstname: "taiji", lastname: "yangami", age: 11, phone_number: "0812345678", email: "taiji@ad.com",location:"120/1 minatocity"});
customer.push({id: 2,firstname: "ishida", lastname: "yamato", age: 11, phone_number: "08789456123", email: "ishda@ad.com",location:"125/2 minatocity"});
customer.push({id: 3,firstname: "hikari", lastname: "yangami", age: 8, phone_number: "0612345678", email: "hikari@ad.com",location:"20/1 hikaringaoka"});
customer.push({id: 4,firstname: "meme", lastname: "takikawa", age: 10, phone_number: "0912345678", email: "meme@ad.com",location:"1/1 chibuya"});


console.table(customer);


let id = 4;

addCustomer = (firstname, lastname, age, phone_number, email,location) => {
    
    id++;
    customer.push({id: id,firstname: firstname, lastname: lastname, age: age, phone_number: phone_number, email: email,location:location})
    return customer;
    
}

deleteCustomer = (id) => {
    let similar_id = false;
    let achieve_index;
    if (reg_id.test(id) == true) {
        customer.forEach((customer) => {
            if (customer.id == id) {
                similar_id = true;
            }
        });
        achieve_index = customer.findIndex(customer => customer.id == id)
        console.log(achieve_index);
        if (similar_id == true) {
            customer.splice(achieve_index,1); 
            return guest;
        } else if (similar_id == false) {
            throw "NO have this customer id";
        }
    } else {
        throw "Incorrect data try again";
    }
    
}
showCustomer = () => {
    console.table(customer);
}

module.exports = {
    addCustomer: addCustomer,
    deleteCustomer: deleteCustomer,
    showCustomer: showCustomer,
    customer: customer
}