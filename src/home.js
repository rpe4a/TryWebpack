import welcome from './welcome';

welcome('home').then(() => {
    console.log("promise");
})

//отправляем функцию в глобальную переменную home
exports.welcome = welcome;