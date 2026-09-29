---
title: "Tenge — Privacy Policy"
linkTitle: "Privacy Policy"
description: "Privacy policy of the Tenge currency converter for iPhone: no personal data collected."
effective: 2026-09-29
icons: "tenge"
---

The short version: Tenge collects no personal data. No accounts, no analytics,
no advertising, no tracking, no third-party SDKs. Everything you do in the app
stays on your device.
{.lead}

Tenge is a currency converter for iPhone made by Oh, just another! — a team of one
person. In this policy, “I” and “me” refer to that person.

## Data I collect

None. Tenge does not collect, store, sell, or share any personal information.
The app has no sign-up, no user accounts, and no analytics or advertising
frameworks embedded in it.

## Location

Tenge can optionally use your device’s **approximate** location for a single
purpose: to find which country you’re in and suggest its currency (“Local”)
in the currency picker. The app asks for permission only when you tap
“Detect Local Currency”, works fully without it, and you can revoke it at any
time in iOS Settings. Precise location is never requested.

To turn the approximate position into a country, iOS sends it to Apple’s
geocoding service (part of iOS, covered by
[Apple’s Privacy Policy](https://www.apple.com/legal/privacy/)). Only the
resulting country code is kept on your device. The location itself is not
stored, and apart from that lookup by iOS it is never sent anywhere — not to
me, and not to any other party.

Your home currency (“Home”) is suggested from your device’s region setting;
that happens on the device and needs no permission.

## Exchange rates

To show current conversion rates, the app requests exchange-rate data over
HTTPS from public sources:

- [Frankfurter](https://frankfurter.dev) (primary) — daily rates from central
  banks and official sources;
- [exchange-api](https://github.com/fawazahmed0/exchange-api) (fallback),
  served from [jsDelivr](https://www.jsdelivr.com) and its Cloudflare Pages
  mirror.

These requests contain only currency codes (for example, “USD”), no personal
identifiers. As with any internet connection, the providers’ servers see your
IP address while serving the request; how they handle connection metadata is
described in their own privacy policies. Tenge sends them nothing else.

## Subscriptions and payments

Tenge is unlocked by an auto-renewable subscription sold through the App Store.
Purchases, free trials, renewals and cancellations are handled entirely by
Apple. I never receive your payment details, name, email address or Apple ID.

To know whether the subscription is active, the app asks Apple’s StoreKit
framework on your device; the check happens on the device, and the result is
not sent anywhere. You can manage or cancel the subscription at any time in
*iOS Settings › [your name] › Subscriptions*, or from the rate panel in the app
(“Manage Subscription”). How Apple handles purchase data is described in
[Apple’s Privacy Policy](https://www.apple.com/legal/privacy/).

## Data stored on your device

Your preferences (selected currencies, favorites, home and local currency, theme)
and a cache of recent exchange rates are stored locally on your device and never
leave it. You can erase all of this at any time via *iOS Settings › Apps ›
Tenge › Reset App on Return*, or by deleting the app.

## Children’s privacy

Tenge does not collect data from anyone, including children.

## Changes to this policy

If the app’s behavior ever changes in a way that affects privacy (say,
analytics get added), this policy will be updated before that version ships,
and the effective date above will change.

## Contact

Questions about this policy or the app:
[rustam@n69.in](mailto:rustam@n69.in).
See also the [Terms of Use](/tenge/terms/).
