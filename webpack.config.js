
const NODE_ENV = process.env.NODE_ENV || 'development'; //задаем какая сборка нам нужна production или development

const webpack = require('webpack')

module.exports = {
    entry:
    {
        /*polyfill: 'babel-polyfill',*/
        home: './src/home',
        about: './src/about'
    }, //входнЫе файлы
    /* [
         //'babel-polyfill', //нужен для адаптивного поведения кода во всех браузерах(в особенности для IE)
         //'./src/home', //входной файл
         
     ],*/

    //куда будем выводить
    output: {
        path: __dirname + "/dist", //папка для собранного файла
        filename: "[name].js", //название файла ([name] - это шаблон, каждый входящий файл, будет генерировать свой бандл)
        library: "[name]" //теперь весь бандл помешен в переменную home и ее можно посмотреть в браузере
    },

    watch: NODE_ENV == 'development', //будет следить за изменениями файлов

    watchoptions: {
        aggregateTimeot: 100 //повышает производительность вотчера webpack
    },

    devtool: NODE_ENV == 'development' ? "cheap-module-inline-source-map" : null, //соурс мап

    plugins: [
        new webpack.DefinePlugin({ 'NODE_ENV': JSON.stringify(NODE_ENV) }) //плагин при сборке передает объявленные глобальные переменные в bundle.js, допустим теперь мы можем использовать эту переменную в файле welcome.js
    ],

    //где вебпак ишет модули
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extension: ['', '.js', '.scss', '.css'],
        //говори webpack откуда взять эти модули
        /*alias: [
            { jquery: "bower_components/jquery/dist/jquery.js" },
            { moment: 'moment/min/moment.min.js' }
        ]*/
    },

    //где вебпак ишет лоудеры
    resolveLoader: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extension: ['', '.js', '.scss', '.css'],
        moduleTempaltes: ['*-loader', '*']
    },

    module: {
        loaders: [
            {
                test: /\.js$/, //к каким файлам будет применятся loader
                loader: 'babel', //название применяемого модуля
                exclude: /node_modules|bower_components/, //исключаем папки для webpack
                query: {
                    presets: ['es2015', 'stage-0', 'react'], //теперь можно писать на es6, loader сам приобразует его в рабочий javascript
                    plugins: [['transform-runtime', {
                        helpers: false,
                        polyfill: false,
                        regenerator: true,
                    }],], //чуточку сжимает bundle.js
                }
            }
        ]
    }
}

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        //плагин который оптимизирует и минимизирует bundle.js
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                unsafe: true
            }
        })
    )
}