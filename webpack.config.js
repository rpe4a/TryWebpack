
const NODE_ENV = process.env.NODE_ENV || 'development'; //задаем какая сборка нам нужна production или development

const webpack = require('webpack')

module.exports = {
    entry: "./home", //входной файл
    
    //куда будем выводить
    output: { 
        //path: __dirname + "/dist", //папка для собранного файла
        filename: "bundle.js", //название файла
        library: "home" //теперь весь бандл помешен в переменную home и ее можно посмотреть в браузере
    },

    watch: NODE_ENV == 'development', //будет следить за изменениями файлов

    watchoptions:{
        aggregateTimeot: 100 //повышает производительность вотчера webpack
    },

    devtool: NODE_ENV == 'development' ? "cheap-module-eval-source-map" : null, //соурс мап

    plugins:[
        new webpack.EnvironmentPlugin('NODE_ENV')
    ]
}