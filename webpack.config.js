
const NODE_ENV = process.env.NODE_ENV || 'development'; //задаем какая сборка нам нужна production или development

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: path.join(__dirname, 'src'), //поиск входящих файлов будет идти в этой директории

    //точка входа, входящие файлы
    /*entry:
    {
        //polyfill: 'babel-polyfill',
        home: './home',
        about: './about',
        common: './common',
        //common: ['babel-polyfill','./common']
    }, //входнЫе файлы*/
    /* [
         //'babel-polyfill', //нужен для адаптивного поведения кода во всех браузерах(в особенности для IE)
         //'./src/home', //входной файл
         
     ],*/

    entry: './main',

    //куда будем выводить
    output: {
        path: path.join(__dirname, 'dist/js'), //папка для собранного файла, так же является абсолютным путем
        publicPath: '/', //'./js/', //публичный путь 
        filename: "[name].js", //название файла ([name] - это шаблон, каждый входящий файл, будет генерировать свой бандл)
        chunkFilename: "[id].[chunkhash].js",
        library: "[name]" //теперь весь бандл помешен в переменную home и ее можно посмотреть в браузере
    },

    watch: NODE_ENV == 'development', //будет следить за изменениями файлов

    watchoptions: {
        aggregateTimeot: 100 //повышает производительность вотчера webpack
    },

    devtool: NODE_ENV == 'development' ? "cheap-module-inline-source-map" : null, //соурс мап

    plugins: [
        new webpack.NoErrorsPlugin(), //если при сборке будет ошибка он не сгенерирует файлы
        new webpack.DefinePlugin({ 'NODE_ENV': JSON.stringify(NODE_ENV) }),//плагин при сборке передает объявленные глобальные переменные в bundle.js, допустим теперь мы можем использовать эту переменную в файле welcome.js
        new webpack.optimize.CommonsChunkPlugin({ //плагин позволяет выделить общую часть всех бандлов в один бандл, который нужно подключить к странице Index.html в начале
            name: 'common', //имя генерируемого файла, если указана такая же входящая точка, то код из нее добавится к этому бандлу с общим кодом
            chunks: ['home', 'about'] //из каких модулей будем выделять общую часть, можно опустить
        }),
        //можно использовать несколько выделений общих частей в разных js файлах
        /*new webpack.optimize.CommonsChunkPlugin({ //плагин позволяет выделить общую часть всех бандлов в один бандл, который нужно подключить к странице Index.html в начале
            name: 'common-2', //имя генерируемого файла
            chunks: ['shop', 'order'] //из каких модулей будем выделять общую часть
        })*/

        //с этим плагином теперь везде можно использовать переменную collection без ее импорта, webpack сам зарекваит ее в бандл во время сборки, смотреть файл home.js
        new webpack.ProvidePlugin({
            collection: 'lodash/collection',
            _: 'lodash'
        }),
        new ExtractTextPlugin("[name].[contenthash].css"),
        new HtmlWebpackPlugin({
            filename: './main.html',
            template: '../index.template.ejs',
            chunks:['main'],
            title: 'TryWebpack'
        })
    ],


    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],//где вебпак ишет модули
        extension: ['', '.js', '.scss', '.css'],
        root: path.join(__dirname, 'vendor'),
        //говори webpack откуда взять эти модули, теперь их можно реквайрить в наши бандлы типо такого import moment from 'moment'
        /*alias: [
            
            { jquery: "bower_components/jquery/dist/jquery.js" },
            { moment: 'moment/min/moment.min.js' }
        ],*/
        alias: {
            old: 'old/dist/old'
        }

    },

    //где вебпак ишет лоудеры
    resolveLoader: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extension: ['', '.js', '.scss', '.css'],
        moduleTempaltes: ['*-loader', '*']
    },

    //используется для подключения библиотек из CDN, допустим тут подключается lodash через глобальную переменную _
    /*externals:{
        lodash: '_'
    },
*/
    module: {
        loaders: [
            {
                test: /\.js$/, //к каким файлам будет применятся loader
                loader: 'babel', //название применяемого модуля
                //exclude: /node_modules|bower_components/, //исключаем папки для webpack
                include: path.join(__dirname, 'src'), //говорит webpack с какими папками мы хотим работать и к какой папке применять данный loader
                query: {
                    presets: ['es2015', 'stage-0', 'react'], //теперь можно писать на es6, loader сам приобразует его в рабочий javascript
                    plugins: [['transform-runtime', {
                        helpers: false,
                        polyfill: false,
                        regenerator: true,
                    }],], //чуточку сжимает bundle.js
                }
            },
            {
                //говорит webpack, что при сборке когда он найдет зависимость c файлом old.js, импортируй в него workSettings и обратно экспортируй функцию work
                test: /old.js$/,
                loader: 'imports?workSettings=>{delay: 500}!exports?work'
            },
            {
                test: /\.jade$/,
                loader: 'jade'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss", {publicPath: './'})
            },
            /*{
                test: /\.css$/,
                loader: 'style!css!postcss!resolve-url'
            },*/
            /*{
                test: /\.(png|jpg|svg|tff|eot|woff|woff2)$/,
                loader: 'url-loader?&name=[path][name].[ext]&limit=100000'//если файл больше 100кб, скопировать его в отдлельный файл
            },*/
            {
                test: /\.(png|jpg|svg|tff|eot|woff|woff2)$/,
                exclude: /\/node_modules\//,
                loader: 'file?&name=[path][name].[hash:6].[ext]'//'url-loader?limit=100000'//'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer({
            browsers: ['last 2 versions', '> 1%']
        }), precss];
    },
    devServer:{
        host: 'localhost',
        port: 8080,
        contentBase: path.join(__dirname, 'dist')
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