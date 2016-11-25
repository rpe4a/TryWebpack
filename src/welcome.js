export default function (message) {

    //Только в development режиме
    if (NODE_ENV == 'development') {
        console.log(message);
        console.log(NODE_ENV);
    }
    
    return new window.Promise((resolve) => {
        alert(message)
        resolve();
    })
}