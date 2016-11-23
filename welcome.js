module.exports = function(message){
    
    //Только в development режиме
    if(process.env.NODE_ENV == 'development'){
        console.log(message);
        console.log(process.env.NODE_ENV);
    }

    alert(`Welcome ${message}`)
}