---
title: "Tenge"
htmlTitle: "Tenge — currency converter for iPhone"
description: "Tenge is a currency converter for iPhone built as a table: amounts already on screen, no typing. 157 currencies, works offline, 36 languages, no ads, no tracking."
og:
  title: "Tenge — currency converter for iPhone"
  description: "A table of amounts instead of a calculator. No typing, works offline, 36 languages."
  image: "/tenge/og.jpg"
  card: "summary_large_image"
icons: "tenge"
logo: "/tenge/logo.svg"
tagline: "Oh, just another currency converter"
badge: "Coming soon to the App Store"
screens:
  - file: "01-table"
    caption: "A table, not a calculator"
    alt: "Tenge with US dollars on the left and euros on the right: 1 to 10 dollars and their euro amounts"
  - file: "02-detail"
    caption: "Tap a row for the amounts in between"
    alt: "The row for 4 dollars unfolded into 4.1, 4.2 and so on up to 4.9, each with its euro amount"
  - file: "03-rate-panel"
    caption: "Pull down for the exact rate"
    alt: "The rate panel above the table: 1 USD = 0.8808 EUR, 1 EUR = 1.13532 USD, updated just now"
  - file: "04-picker"
    caption: "Home and Local currencies first"
    alt: "The currency picker with search, the Home currency on top and a list of favorites"
---

At a market stall you don’t want to type, you want to glance. So Tenge is a
table: amounts on the left (10, 20, 30… or 10K, 20K, 30K…), conversions on the right,
like a price list that’s always ready.
{.lead}

## How it works

- **Tap a currency code** at the top to change it: the left one is
  “from”, the right one is “to”.
- **Swipe the header sideways** to swap the pair.
- **Swipe the table** to page through amount ranges — from 1–10 up to
  billions, only as far as the numbers make sense for the rate.
- **Tap a row** to unfold the values in between.
- **Swipe down from the header** for the exact rate, the inverse rate and
  the time of the last update; the **•••** menu there leads to Settings, your
  subscription, the Privacy Policy and the Terms of Use.
{.gestures}

## What’s inside

- 157 currencies with flags and names in your language.
- **Home** and **Local** currencies at the top of the picker: yours, from the device
  region, and the one of the country you’re in — detected on request or set by hand
  before a trip.
- Favorites, search, A–Z or by-region sorting.
- Works offline: the last rates stay on the device, with a note when they are more
  than a day old.
- 36 languages, including right-to-left Arabic and Hebrew.
- VoiceOver, Dynamic Type, Increase Contrast and Reduce Motion support.
- No accounts, no ads, no analytics, no tracking.

## Price

Tenge is a subscription app: monthly or yearly, with a free trial for new
subscribers. The price for your country is shown in the app before you buy; you can
cancel any time in iOS Settings. Details are in the [Terms of Use](/tenge/terms/).

## Support

Found a bug or need help? Write to [rustam@n69.in](mailto:rustam@n69.in),
ideally with your iOS version and a screenshot. Feature ideas are welcome too.

How fresh are the rates?
: They are daily reference rates from central banks and official sources, delivered by
  [Frankfurter](https://frankfurter.dev) (with the open
  [exchange-api](https://github.com/fawazahmed0/exchange-api) dataset as a fallback).
  The app checks for new rates when you open it, at most once an hour. Rates are
  indicative: banks and exchange offices quote their own.

Why does it ask for my location?
: Only when you tap “Detect Local Currency”, to suggest the currency of the country
  you’re in. It uses approximate location, and only the country is kept on the device.
  See the [Privacy Policy](/tenge/privacy/).

Where are the settings?
: In the iOS Settings app: *Settings › Apps › Tenge* — theme, style, digits, haptics, the
  rate cache and a full reset. There you can also pick a language for Tenge alone.

How do I cancel the subscription?
: *iOS Settings › [your name] › Subscriptions*, or “Manage Subscription” in the
  **•••** menu of the rate panel (swipe down from the header).
