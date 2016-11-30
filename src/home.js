import welcome from './welcome';
/*import {filter} from 'lodash/collection';*/
//import old from 'imports?workSettings=>{delay: 500}!exports?work!old' //чтобы так писать необходимо установить imports-loader и exports-loaders 
//imports?workSettings=>{delay: 500}!exports?work! - вынесен в конфиг
import old from 'old'

document.getElementById("loginButton").onclick = function(){
    //функция динамической подгрузки модулей, webpack автоматически соберет ее в бандл auth
    require.ensure([], function(require){
        let login = require('./auth/login') 
 
        login();
    }, 'auth')
}

document.getElementById("logoutButton").onclick = function(){
    
    //функция динамической подгрузки модулей, webpack автоматически соберет ее в бандл auth
    require.ensure([], function(require){
        let logout = require('./auth/logout')  

        logout();  
    }, 'auth')
}

welcome('home').then(() => {
    console.log("okkey promise!"); 
})

old()

let users = [
    {id: 1, name: 'Misha' },
    {id: 2, name: 'Vanya' },
    {id: 3, name: 'Serega' },
]

/*console.log(_.filter(users, ['id', 1]));*/
/*console.log(collection.filter(users, ['id', 1]));*/

//отправляем функцию в глобальную переменную home
exports.welcome = welcome;