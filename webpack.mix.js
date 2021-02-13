const mix = require('laravel-mix');

const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

require('laravel-mix-webp');
require('laravel-mix-polyfill');

mix
    // Обрабатываем JS
    .js(
        'resources/assets/js/main.js',
        'public/assets/js'
    )
    // Используем полифиллы
    .polyfill({
        enabled: true,
        useBuiltIns: "usage",
        targets: false, // Используем настройки browserslist из package.json
        debug: true,
        corejs: '3.8',
    })
    // Преобразовываем SASS в CSS
    .sass(
        'resources/assets/scss/main.scss', // Путь относительно каталога с webpack.mix.js
        'public/assets/css/' // Путь относительно каталога с webpack.mix.js
    )
    // Переопределяем параметры mix
    .options({
        processCssUrls: false, // Отключаем автоматическое обновление URL в CSS
        postCss: [
            // Добавляем вендорные префиксы в CSS
            require('autoprefixer')({
                cascade: false, // Отключаем выравнивание вендорных префиксов
            }),
            // Группируем стили по медиа-запросам
            require('postcss-sort-media-queries'),
        ],
    })
    // Настраиваем webpack для обработки изображений
    .webpackConfig({
        plugins: [
            // Создаем svg-спрайт с иконками
            new SVGSpritemapPlugin(
                'resources/assets/images/icons/*.svg', // Путь относительно каталога с webpack.mix.js
                {
                    output: {
                        filename: 'assets/images/icons.svg', // Путь относительно каталога public/
                        svg4everybody: false, // Отключаем плагин "SVG for Everybody"
                        svg: {
                            sizes: false // Удаляем инлайновые размеры svg
                        },
                        chunk: {
                            keep: true, // Включаем, чтобы при сборке не было ошибок из-за отсутствия spritemap.js
                        },
                        svgo: {
                            plugins : [
                                {
                                    'removeStyleElement': false // Удаляем из svg теги <style>
                                },
                                {
                                    'removeAttrs': {
                                        attrs: ["fill", "stroke"] // Удаляем часть атрибутов для управления стилями из CSS
                                    }
                                },
                            ]
                        },
                    },
                    sprite: {
                        prefix: 'icon-', // Префикс для id иконок в спрайте, будет иметь вид 'icon-имя_файла_с_иконкой'
                        generate: {
                            title: false, // Не добавляем в спрайт теги <title>
                        },
                    },
                }
            ),
            // Копируем картинки из каталога ресурсов в публичный каталог
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'resources/assets/images', // Путь относительно каталога с webpack.mix.js
                        to: 'assets/images', // Путь относительно каталога public/,
                        globOptions: {
                            ignore: ["**/icons/**"], // Игнорируем каталог с иконками
                        },
                    },
                ],
            }),
            // Оптимизируем качество изображений
            new ImageminPlugin({
                test: /\.(jpe?g|png|gif)$/i,
                plugins: [
                    imageminMozjpeg({
                        quality: 80,
                        progressive: true,
                    }),
                ],
            }),
        ],
    })
    // Создаем WEBP версии картинок
    .ImageWebp({
        from: 'resources/assets/images', // Путь относительно каталога с webpack.mix.js
        to: 'public/assets/images', // Путь относительно каталога с webpack.mix.js
        imageminWebpOptions: {
            quality: 70
        }
    })
    // Включаем версионность
    .version();
