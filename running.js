var http = require('http');
var url = require('url');


const {deletemenu,addmenu,showMenu,menu} = require('./menu.js');
const {addCustomer,deleteCustomer,showCustomer,customer} = require('./customer.js');
const {showOrder,showAllorder,order} = require('./order.js');

http.createServer(function (req, res) {

    var require_path = url.parse(req.url, true);
    var message = '';
    var status = 200;
    var data = '';

    switch(require_path.pathname) {
        case '/addmenu':
            try {
                let all_menu = addmenu(require_path.query.name, parseInt(require_path.query.price),parent(require_path.query.quantity));
                message += `This menu ${require_path.query.name} has been added.`
                data = JSON.stringify(all_menu)
                showMenu();
            }catch(err) {
                status = 400;
                message += (err)
                console.log(err);
            }
            break;
        case '/deletemenu':
            try {
                let all_menu = deletemenu(require_path.query.menu_id);
                message += `This menu ${require_path.query.name} has been deleted.`
                data = JSON.stringify(all_menu)
                showMenu();
            }catch(err) {
                status = 400;
                message += (err)
                console.log(err);
            }
            break;
        case '/addCustomer':
            try {
                let show = addCustomer(require_path.query.firstname, require_path.query.lastname, parseInt(require_path.query.age),
                    require_path.query.phone_number, require_path.query.email,require_path.query.location)
                message += `Customer name ${require_path.query.firstname} ${require_path.query.lastname} has been added.`
                data += JSON.stringify(show);
                
            }catch (err) {
                status = 400;
                message += (err)
                console.log(err)
            }
            break;
        case '/deleteCustomer':
            try {
                let show = deleteCustomer(require_path.query.id);
                message += `Customer name ${require_path.query.name} has been deleted.`
                data += JSON.stringify(show)
            } catch (err) {
                status = 400;
                message += (err)
                console.log(err)
            }    
            break;
        case '/searchType':
            try {
                let show = searchType(require_path.query.key)
                message += `found ${show[0]} item(s)`
                data += JSON.stringify(show[1])
            } catch (err) {
                status = 400;
                message += (err)
                console.log(err)
            }
            break;
        
        case '/showOrder':
            try {
                let show = showOrder(parseInt(require_path.query.id));
                message += 'success';
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;
        case '/showAllorder':
            try {
                let show = showAllorder();
                message += 'success';
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;

            default: 
                status = 404
                message = 'path not found!'
            break;
    }
   
    let response_objects = {
        status: status,
        message: message,
        data: data
    }

    res.writeHead(status, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(response_objects));


}).listen(8080);
console.log('Inventory system is running on port 8080.');