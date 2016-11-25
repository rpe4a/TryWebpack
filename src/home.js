import welcome from './welcome';
/*import {filter} from 'lodash/collection';*/

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

let users = [
    {id: 1, name: 'Misha' },
    {id: 2, name: 'Vanya' },
    {id: 3, name: 'Serega' },
]

console.log(_.filter(users, ['id', 1]));

//отправляем функцию в глобальную переменную home
exports.welcome = welcome;