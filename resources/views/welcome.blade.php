<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel Mix Settings</title>
    <link rel="stylesheet" href="{{ mix('/assets/css/main.css') }}">
</head>
<body>
<div class="page">
    <header class="page__header page-header">
        <h1 class="page-header__title">Laravel Mix Settings</h1>
    </header>
    <main class="page__body page-body">
        <picture class="page-body__img">
            <source srcset="/assets/images/happy-new-year.webp" type="image/webp">
            <img src="/assets/images/happy-new-year.jpg" alt="happy-new-year">
        </picture>
    </main>
    <footer class="page__footer page-footer">
        <div class="page-footer__social social">
            <a href="./" class="social__link">
                <svg class="social__icon social__icon_viber">
                    <use xlink:href="/assets/images/icons.svg#icon-viber" />
                </svg>
            </a>
            <a href="./" class="social__link">
                <svg class="social__icon social__icon_telegram">
                    <use xlink:href="/assets/images/icons.svg#icon-telegram" />
                </svg>
            </a>
            <a href="./" class="social__link">
                <svg class="social__icon social__icon_whatsapp">
                    <use xlink:href="/assets/images/icons.svg#icon-whatsapp" />
                </svg>
            </a>
            <a href="./" class="social__link">
                <svg class="social__icon social__icon_youtube">
                    <use xlink:href="/assets/images/icons.svg#icon-youtube" />
                </svg>
            </a>
            <a href="./" class="social__link">
                <svg class="social__icon social__icon_instagram">
                    <use xlink:href="/assets/images/icons.svg#icon-instagram" />
                </svg>
            </a>
        </div>
    </footer>
</div>
<script src="{{ mix('/assets/js/main.js') }}"></script>
</body>
</html>
