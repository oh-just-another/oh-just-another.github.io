# Медиа-файлы

Статус набора, который раздаётся с `/` (корень репо). Мастер-источник растров —
SVG логотипа.

## Обязательно

| Файл | Размер | Где используется | Статус |
| --- | --- | --- | --- |
| `favicon.ico` | 32×32 (+16×16 внутри) | `<link rel="icon" sizes="32x32">` | ✅ есть |
| `icon.svg` | вектор | `<link rel="icon" type="image/svg+xml">` | ✅ есть; внутри `<style>` с `prefers-color-scheme` — сама темнеет вместе с темой браузера |
| `apple-touch-icon.png` | 180×180 | `<link rel="apple-touch-icon">` | ✅ есть |
| `og-image.png` | 1200×630 | `og:image`, `twitter:image` | ❌ подготовить. Одна карточка для Open Graph и Twitter/X `summary_large_image`; текст в центральной зоне 1200×600; вес до 1 МБ |
| логотип в хидере | 112×48, вектор | инлайн `<svg class="logo">` в `index.html` | ✅ один SVG с `fill="currentColor"`, цвет через `--logo-ink` (светлая `#4e8cff`, тёмная `#fff`) |
| `android-chrome-192x192.png`, `-512x512.png` + `site.webmanifest` | 192/512 | `<link rel="manifest">` | ✅ есть; манифест заполнен (name/short_name) |

Не подключены в `<head>` (и не обязаны быть): `favicon-16x16.png`, `favicon-32x32.png` —
их роли закрывают `favicon.ico` + `icon.svg`. Можно удалить или оставить про запас.

## Опционально

| Файл | Размер | Назначение |
| --- | --- | --- |
| `og-image-vk.png` | 1200×536 | Превью ссылки во VK (`vk:image`); тег из страницы убран — возвращать вместе с файлом, если VK важен. |
| Соц-превью GitHub-организации | 1280×640 | Загружается в настройках организации на GitHub, этим сайтом не раздаётся; переиспользовать макет og-image. |

## Чеклист продакшена

- [x] Фавиконки экспортированы из одного мастера.
- [ ] `og-image.png` 1200×630 подготовить и положить в корень.
- [ ] Прогнать PNG через оптимизатор (`oxipng` / `squoosh`); og-image < 1 МБ.
- [ ] Проверить карточки дебаггерами (Facebook Sharing Debugger, X Card Validator, Telegram `@WebpageBot`).
- [ ] После стабилизации набора удалить исходники `LOGO for site LIGHT/DARK.svg`
      (`ORG LOGO.png` остаётся мастером аватарок) — см. RECOMMENDATIONS.md.
