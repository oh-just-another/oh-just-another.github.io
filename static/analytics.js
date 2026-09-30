/* Oh, just another! — analytics for every page under ohjustanother.site:
   the Hugo pages (/, /tenge/, /privacy/…), the diagram docs (/diagram/, a
   separate Docusaurus deploy) and its playground. Each includes
       <script src="https://ohjustanother.site/analytics.js" defer></script>

   Google Analytics 4 with Consent Mode v2. Until the visitor allows it, GA
   runs without cookies (analytics_storage denied) and advertising is always
   off. The answer is kept in localStorage — one origin, so one answer for the
   whole site. Any element with [data-analytics-settings] asks again.

   Nothing runs off the production host (local dev, previews) or while the
   Measurement ID is empty. */
(function () {
    "use strict";

    var MEASUREMENT_ID = "G-31HYWMYE3B"; // GA4 › Admin › Data streams › Measurement ID (G-…)
    var HOST = "ohjustanother.site";
    var KEY = "oja-analytics-consent"; // "granted" | "denied"
    var PRIVACY_URL = "https://ohjustanother.site/privacy/";

    if (!MEASUREMENT_ID || location.hostname !== HOST || window.__ojaAnalytics) return;
    window.__ojaAnalytics = true;

    function read() {
        try { return localStorage.getItem(KEY); } catch (e) { return null; }
    }
    function write(value) {
        try { localStorage.setItem(KEY, value); } catch (e) { /* private mode */ }
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;

    var choice = read();
    gtag("consent", "default", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: choice === "granted" ? "granted" : "denied"
    });
    gtag("set", "ads_data_redaction", true);
    gtag("js", new Date());
    gtag("config", MEASUREMENT_ID);

    var tag = document.createElement("script");
    tag.async = true;
    tag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(tag);

    // --- The question: a small card in the corner, in the site's mono style ---

    // Dark colors: the site's dark palette (accent #7aa8ff). Docusaurus sets
    // data-theme on <html> from its own toggle; elsewhere the OS decides.
    function dark(scope) {
        return scope + ".oja-consent{background:#1a1a1a;color:#eaeaea;border-color:#333}" +
            scope + ".oja-consent a," + scope + ".oja-consent button{color:#7aa8ff;border-color:#7aa8ff}" +
            scope + ".oja-consent button[data-choice=granted]{background:#7aa8ff;color:#111}";
    }

    var CSS =
        ".oja-consent{position:fixed;left:16px;bottom:16px;z-index:2147483000;max-width:400px;" +
        "padding:14px 16px;border:1px solid #d9d9d9;border-radius:12px;background:#fff;color:#111;" +
        "box-shadow:0 8px 28px rgba(0,0,0,.14);text-transform:none;letter-spacing:0;text-align:left;" +
        "font:14px/1.5 ui-monospace,'SF Mono','Cascadia Mono','Roboto Mono',Menlo,Consolas,monospace}" +
        ".oja-consent p{margin:0}" +
        ".oja-consent a{color:#2f6fe0;text-underline-offset:3px}" +
        ".oja-consent div{display:flex;gap:8px;margin-top:12px}" +
        ".oja-consent button{flex:1;min-height:36px;padding:0 12px;border:1px solid #2f6fe0;" +
        "border-radius:999px;background:none;color:#2f6fe0;font:inherit;cursor:pointer}" +
        ".oja-consent button[data-choice=granted]{background:#2f6fe0;color:#fff}" +
        "@media (prefers-color-scheme:dark){" + dark(":root:not([data-theme=light]) ") + "}" +
        dark(":root[data-theme=dark] ") +
        "@media (max-width:479px){.oja-consent{left:8px;right:8px;bottom:8px;max-width:none}}";

    var card = null;

    function hide() {
        if (card) { card.remove(); card = null; }
    }

    function answer(value) {
        write(value);
        gtag("consent", "update", { analytics_storage: value });
        hide();
    }

    function show() {
        if (card) return;
        if (!document.getElementById("oja-consent-style")) {
            var style = document.createElement("style");
            style.id = "oja-consent-style";
            style.textContent = CSS;
            document.head.appendChild(style);
        }
        card = document.createElement("div");
        card.className = "oja-consent";
        card.setAttribute("role", "region");
        card.setAttribute("aria-label", "Analytics cookies");
        card.innerHTML =
            "<p>This site counts visits with Google Analytics. Allow analytics cookies? " +
            "<a href=\"" + PRIVACY_URL + "\">Privacy</a></p>" +
            "<div><button type=\"button\" data-choice=\"granted\">Allow</button>" +
            "<button type=\"button\" data-choice=\"denied\">No, thanks</button></div>";
        card.addEventListener("click", function (event) {
            var button = event.target.closest("button[data-choice]");
            if (button) answer(button.getAttribute("data-choice"));
        });
        document.body.appendChild(card);
    }

    function ready(fn) {
        if (document.readyState !== "loading") fn();
        else document.addEventListener("DOMContentLoaded", fn);
    }

    ready(function () {
        if (choice !== "granted" && choice !== "denied") show();
        document.addEventListener("click", function (event) {
            var link = event.target.closest && event.target.closest("[data-analytics-settings]");
            if (link) { event.preventDefault(); show(); }
        });
    });
})();
