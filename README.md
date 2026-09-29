# oh-just-another website

Organization landing and app pages, built with [Hugo](https://gohugo.io)
and published to https://ohjustanother.site by GitHub Actions
(`.github/workflows/hugo.yml`).

| URL | Source |
| --- | --- |
| `/` | `content/_index.md` + `layouts/index.html` (styles: `assets/css/home.css`, inlined) |
| `/tenge/` | `content/tenge/_index.md` + `layouts/tenge/list.html` |
| `/tenge/privacy/`, `/tenge/terms/` | `content/tenge/*.md` + `layouts/tenge/single.html` |
| `/diagram/` | not here — the `diagram` repo's own Pages, mounted by GitHub |

Header links: `[menus.main]` (landing) and `[menus.tenge]` (Tenge pages) in
`hugo.toml`. Static files (icons, `CNAME`, `tenge/tenge.css`) live in `static/`.

```sh
hugo server   # http://localhost:1313
hugo          # build into public/
```
