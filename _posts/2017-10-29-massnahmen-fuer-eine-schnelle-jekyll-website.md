---
layout: post
title: "Maßnahmen für eine schnelle Jekyll Webseite"
keywords:
description: "Arne beschreibt welche Maßnahmen er getroffen hat, um seine Webseite zu beschleunigen."
has_featured: false
featuredimage: "http://lorempixel.com/1280/768/technics/"
categories: [softwaredev]
---
Ich habe heute mal ein paar Stunden Zeit investiert und an meiner Jekyll Konfiguration gearbeitet. Mein Ziel war es, den [Web Page Performance Test](webpagetest.org){:target="_blank"} auf 5x A zu bekommen.

Was also ist dafür nötig?

- Bilder in Größe und Qualität optimieren
- HTML, CSS und Javascript minifizieren und komprimieren
- Inline CSS verwenden für "above the fold" kritische Styles
- Blocking Requests asynchron laden
- Browser Caching aktivieren

Aber eins nach dem anderen.<!--more-->

## Jekyll Struktur
Meine Verzeichnis Struktur sieht so aus:

```
. # Root Verzeichnis
├── _data # yaml 
├── _includes # html Dateien
│   └── assets # src Dateien
│       ├── css
│       └── js
├── _layouts # html Dateien
├── _posts # Markdown Dateien
├── _snippets # Markdown Collection
├── assets # Public Assets Verzeichnis
│   ├── css
│   ├── img
│   └── js
├── blogimg # Blog Bilder
└── projekte # Markdown Dateien

```

Unterhalb von `_includes` habe ich noch einen Ordner mit `assets` angelegt. Warum, dass erkläre ich weiter unten bei CSS und Javascript minifizieren.

## Bilder optimieren 
Ich habe im ersten Step dafür das Open Source Tool [ImageOptim](https://imageoptim.com){:target="_blank"} verwendet. Zum Glück kann es auch Batch Verarbeitung. Um jetzt alle Bilder aus meinem Blog nachträglich zu optimieren, habe ich folgendes im Terminal ausgeführt:

```shell 
$ cd blogimg
$ open -a ImageOptim .
```

[![ImageOptim]({{ site.url }}/blogimg/201710/imageoptim.png)]({{ site.url }}/blogimg/201710/imageoptim.png){:class="fancybox"}

Die Bilder werden jetzt komprimiert und direkt im Verzeichnis mit dem optimierten Bild ersetzt. Je nachdem wie viele Bilder es sind, dauert dies eine Weile. Deswegen kann das Programm im Hintergrund arbeiten, und wir gehen weiter zum Minifizieren von HTML, CSS und JS.

## HTML, CSS und JS komprimieren
Ich habe folgendes GEM installiert: `jekyll-minifier` um damit die Javascript und CSS Ausgabe zu komprimieren.

```shell 
$ gem install jekyll-minifier
```

In der `_config.yml` noch kurz aktivieren und Einstellungen festlegen:

```yaml
gems: 
  - jekyll-minifier

# jekyll minifier
jekyll-minifier:
  remove_comments: true
  compress_css: true
  compress_javascript: true
  exclude: ["*.html", "*.xml"]
```

HTML und XML Dateien wollen wir nicht komprimieren, das übernimmt ja bereits das Layout compress.html.

### HTML komprimieren
Um die Ausgabe von Jekyll zu komprimieren, verwende ich das [`compress`](http://jch.penibelst.de/){:target="_blank"} Layout.

Das ist wirklich einfach. Runterladen, in den `_layouts` Ordner kopieren und das `default.html` Layout mit folgendem YAML erweitern:

```html
# _layouts/default.html
---
layout: compress
---
<!doctype html>
[...]
```

Nun wird aus unserem lesbaren HTML:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Title</title>
</head>
<body>
<p>Hier steht der Inhalt</p>
</body></html>
```

Dieses komprimierte HTML:
```html
<!DOCTYPE html><html><head><title>Title</title></head><body><p>Hier steht der Inhalt</p></body></html>
```

Übrigens inline CSS und Javascript wird ebenfalls komprimiert.

### CSS komrpimieren
Meine CSS und Sass Dateien habe ich in dem Verzeichnis `_includes/assets/css/` untergebracht. In meinem öffentlichen Verzeichnis `assets/css/` (der am Ende auch hochgeladen wird) liegt die Datei `blocking.scss`. In dieser Datei inkludiere ich nur solche CSS Styles, die ATF (Above The Fold) Inhalte nicht blockieren.

Google Fonts, Syntax Highlighting Styles und die Fancybox Styles.

{% raw %}
```liquid
# assets/css/blocking.css
---
---
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro|Quattrocento+Sans&ver={{ "now" | date: "%Y%m%d%H%M" }}');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css?ver={{ "now" | date: "%Y%m%d%H%M" }}');

{% capture styles %}
{% include assets/css/jquery.fancybox.css %}
{% include assets/css/syntax.css %}
{% endcapture %}
{{ styles }}
```
{% endraw %}

Im Ausgabe Verzeichnis liegt dann die Datei `_site/assets/css/blocking.css`. 

Die blocking.css wird in der `_includes/head.html` wie folgt asynchron geladen:

{% raw %}
```liquid
# _includes/head.html
<link async rel="stylesheet" href="{{ site.url }}/assets/css/blocking.css?ver={{ "now" | date: "%Y%m%d%H%M" }}" type="text/css">
```
{% endraw %}

Zum Thema **above the fold** lade ich die Theme kritischen Styles, also solche die für die korrekte Anzeige und das Styling unabdingbar sind, per Inline CSS. Das Inline CSS wird von dem Layout compress.html komprimiert. Die kritischen Styles liegen im Verzeichnis `_includes/assets/css/theme.css`. Die Ausgabe erfolgt BEVOR die blocking.css geladen wird.

{% raw %}
```liquid
# _includes/head.html
<style type="text/css">
   {% capture atfstyles %}
     {% include assets/css/theme.css %}
   {% endcapture %}
   {{ atfstyles }}
 </style>
 <link async rel="stylesheet" href="{{ site.url }}/assets/css/blocking.css?ver={{ "now" | date: "%Y%m%d%H%M" }}" type="text/css">
```
{% endraw %}

### Javascript komrpimieren
Die Javascript Dateien liegen im Verzeichnis `_includes/assets/js/`. Im head.html inkludiere ich jQuery per Inline Script:

{% raw %}
```liquid
# _includes/head.html
<script type="text/javascript">
  {% include assets/js/jquery-2.1.3.min.js %}
</script>
```
{% endraw %}

Das hat den Vorteil, dass jQuery inline geladen wird und kein zusätzlicher Request zum Server verschwendet wird.

Alle anderen Javascript Dateien werden in der Datei `assets/js/main.js` wie folgt zusammengefasst und minifiziert:

{% raw %}
```liquid
# assets/js/main.js
---
---
{% capture jsfiles %}
	{% include assets/js/jquery.fancybox.min.js %}
	{% include assets/js/typed.min.js %}
	{% include assets/js/theme.js %}
{% endcapture %}
{{ jsfiles }}
```
{% endraw %}

und dann im Footer referenziert und asynchron geladen:

{% raw %}
```liquid
# _includes/footer.html
<script async src="{{ site.url }}/assets/js/main.js?ver={{ "now" | date: "%Y%m%d%H%M" }}"></script>
```
{% endraw %}

## Browser Cache 
Weitere Einstellungen können noch über die .htaccess Datei vorgenommen werden. Die Einstellungen beeinflussen den zugrunde liegenden Apache Webserver. 

Im root Verzeichnis wird also die Datei `.htaccess` angelegt, falls nicht schon vorhanden und mit folgenden Zeilen ergänzt:

```shell 
# 1 Month for most static assets
<filesMatch ".(css|jpg|jpeg|png|gif|js|ico|pdf)$">
Header set Cache-Control "max-age=2592000, public"
</filesMatch>
```

Das `<filesMatch>` bezieht sich auf alle css,jpg,jpeg,png,gif,js,ico und pdf Dateien, die vom Webserver ausgeliefert werden sollen. Hier setzen wir für alle diese Dateien `Cache-Control` auf ein maximal Alter von 2592000 Sekunden (30 Tage). Der Browser wird also angewiesen, diese Dateien erst in 1 Monat erneut anzufragen, falls sie sich bereits im Browser Cache befinden. Wenn nicht, werden sie vom Webserver geladen. 

Weiterhin sagen wir dem Webserver noch, dass alle Textdateien gzip komrpimiert an den Browser übertragen werden sollen:

```shell 
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

Das funktioniert allerdings nur, wenn das Modul `mod_deflate` aktiv ist.

## Ergebnis
Mit deaktiviertem Cache im Chrome lädt die Seite https://arnegockeln.com:

| Requests | Transfered | Finish | DOMContent Loaded | Load |
| 14 | 916 KB | 1.26s | 554 ms | 1.09 s |

Und der Web Page Performance Test liefert 4x A und 1x B:
[![Web Page Performance Test]({{ site.url }}/blogimg/201710/webpagetest-arnegockeln.png)]({{ site.url }}/blogimg/201710/webpagetest-arnegockeln.png){:class="fancybox"}

Ich bin zufrieden! :)
