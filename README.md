## Исходный код для [видео урока по Laravel Mix](https://youtu.be/zfn2p8yinc0).

1. Создаем новый проект laravel

```
laravel new lavarel-mix-settings
```


2. Удаляем лишние зависимости из package.json, устанаваливаем оставшиеся

```
npm i
```

3. Устанавливаем новые зависимости

```
npm i -D copy-webpack-plugin imagemin-mozjpeg imagemin-webpack-plugin laravel-mix-polyfill laravel-mix-webp postcss-sort-media-queries sass sass-loader svg-spritemap-webpack-plugin
```

```
npm i svg4everybody
```

4. Настраиваем browserslist в package.json

```
"browserslist": [
   "defaults",
   "ie 11"
],
```

5. Настраиваем laravel-mix через webpack.mix.js
