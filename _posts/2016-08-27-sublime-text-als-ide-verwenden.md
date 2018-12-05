---
layout: post
title: "Use Sublime Text as IDE"
date: 2016-08-27 23:00:00 +0200
author: Arne Gockeln
categories: [softwaredev]
---
Bisher habe ich PHPStorm als IDE verwendet und Sublime Text als Text Editor mit dem man schnell mal 
was bearbeiten kann. Da ich aber die Shortcuts von Sublime Text liebe und schnelle, resourcen 
schonende Software; habe ich mich dazu entschlossen Sublime Text als Main IDE zu verwenden. 
Dazu kommt dass ich kein Freund von Abos bin.<!--more-->

Ich nutze [Sublime Text Build 3114](http://sublimetext.com){:target="_blank"} aktuell mit ein paar Plugins, die ich 
hier näher beschreiben will.

### Theme ändern
Zunächst habe ich ein anderes Theme installiert. Ich finde es angenehmer auf weißem Hintergrund zu 
schreiben. Da ermüden die Augen nicht so schnell. Das Theme heist: Soda Theme. Wie man es genau installiert und aktiviert
steht hier <http://buymeasoda.github.io/soda-theme/>{:target="_blank"}

Per Default werden in ST3 Verzeichnis Symbole UND Pfeile angezeigt. Das fand ich nicht so schön und habe mir eine 
kleine Theme Customization geschrieben. Dazu musst du einfach in deinen User Preferences Ordner eine Datei mit Namen 
"Soda Light 3.sublime-theme" (Soda Dark 3.sublime-theme, wenn das dunkle Theme genutzt wird) anlegen und folgenden Inhalt 
speichern:

    [
      {
            "class": "sidebar_tree",
            "row_padding": [8, 3],
            "indent": 15,
            "indent_offset": 15,
            "indent_top_level": false
        },
        {
          "class": "icon_file_type",
          "content_margin": [0,0]
      },
      {
          "class": "icon_folder",
          "content_margin": [0,0]
      },
      {
          "class": "icon_folder_loading",
          "content_margin": [0,0]
      }
    ]

## Plugins
![Plugin übersicht]({{ site.url }}/blogimg/screenshot-sublimetext-plugins.png){:class="img-responsive"}

### PackageControl.io
Als nächstes ist zu empfehlen das Plugin <http://packagecontrol.io> zu installieren. 
Über PackageControl kann man ganz einfach Plugins installieren und vor allem aktuell halten. 
Innerhalb von Sublime Text kann man mit der Tastenkombination **CMD+SHIFT+P** das Command Menu 
starten, dann **i** oder **pci** tippen und den Eintrag **Package Control: Install Package** auswählen.
Es öffnet sich eine Liste, in der man nach Plugins suchen und mit Enter direkt installieren kann. 
Ich suche allerdings lieber auf der Webseite packagecontrol.io nach neuen Plugins und installiere 
sie dann über das Menu.

### Sublime Better Completition
Für die Autovervollständigung verwende ich das Plugin "Better Completition". Es gibt dort auch
die Möglichkeit eigene auto-completition Dateien anzulegen.

### PHP Completions
Autovervollständigung von PHP Syntax. Mehr brauch ich dazu eigentlich nicht zu sagen. Die Syntax bis
Version 7 wird aktuell unterstützt.

### PHP-Twig
Ich arbeite viel mit der Template Engine Twig von Sensiolabs. Deswegen verwende ich den Autovervollständiger
und Syntax Highlighter PHP-Twig. Die gleiche Syntax wird übrigens auch bei Jekyll verwendet, dafür 
habe ich aber ein anderes Plugin genutzt.

### WordPress Completitions
Für die WordPress Entwicklung ist dieses Plugin sehr hilfreich, da es alle WordPress Funktionen und 
Klassen vervollständigt. Die Plugin Autoren sind sehr aktiv und reagieren schnell auf die neuen 
Releases von WordPress. 

### Liquid Syntax
Bei Twig kurz angesprochen verwendet Jekyll die Liquid Syntax in den Templates. Dafür nutze ich 
dieses Plugin. Es bietet auch solche schönen Snippets wie **%** + TAB drücken.

### Color Highlighter
Sehr hilfreich bei CSS Syntax wenn es um Farben geht. Das Plugin "Color Highlighter" unterlegt die
hexadezimalen Farbcodes (#000000, rgb(0,0,0), black) mit den entsprechenden Farben.

### DocBlockr
Das Plugin unterstützt mich massiv beim Kommentieren von Funktionen und Klassen. Man tippt einfach 
/** und Enter und der Block wird vervollständigt zu

	/**
	 * _
	 */

Wenn man das bei Funktionen oder Klassen eine Zeile drüber anwendet, werden auch Parameter übernommen.

### Sublime On Save Build
Wenn man mit SASS oder LESS arbeitet (bei Web Projekten) und keinen auto builder wie JekyllRB verwendet,
dann hilft dieses Plugin dabei die CSS Dateien zu generieren sobald eine Änderung an der SASS oder LESS
Datei durchgeführt wird. Sublime Text bietet ein eigenes Build System an, dass man auch für andere
Sprachen verwenden kann. So könnte man also auch hierüber den build Prozess für zum Beispiel C++ ansteuern.
Das Plugin kann man bei bedarf aktivieren, so dass es nicht zur doppelten Verarbeitung kommen kann.

### SASS Build
Damit das o.g. Plugin SOSB auch funktioniert habe ich diesen SASS Builder installiert. Er unterstützt
2 Varianten. Zum einen den einfachen Build Prozess bei dem am Ende CSS herauskommt und zum anderen
einen komprimierten Build Prozess bei dem am Ende komprimiertes CSS herauskommt.

### Minify
Um selbst schnell Dateien zu minifizieren, verwende ich das Plugin Minify. Es kann CSS, HTML, Javascript,
JSON und SVG Dateien verarbeiten. Wenn ich mit JekyllRB arbeite, brauche ich dies allerdings nicht,
da Jekyll da eigene Plugins bereithält, die wärend des Build Prozesses ausgeführt werden.

### Simple FTP Deploy
Diese Funktion fand ich schon bei PHPStorm cool. Super Cool dass es die auch bei Sublime Text gibt.
Mit diesem Plugin werden die Änderungen an Dateien beobachtet und automatisch ein Deployment per
FTP durchgeführt. Damit Sublime Text weis wohin es die Dateien schieben soll, wird in das zu beobachtende
Verzeichnis eine JSON Datei gelegt, in der die Zugangsdaten und das Zielverzeichnis angegeben wird.

	{
    	"host": "localhost",
    	"port": 21, 
    	"username": "user",
    	"password": "pass",
    	"rootDirectory": "/path/"
	}

Funktioniert wirklich einwandfrei!

### Jekyll
Jekyll verwende ich mittlerweile für so ziemlich alle Webseiten, Blogs, Landingpages, etc. Gerade
wenn man mit Jekyll einen Blog betreibt, ist dieses Plugin extrem hilfreich. Nach der Installation
muss noch kurz eine Einstellung in den User Preferences gemacht werden, damit das _post Verzeichnis
automatisch gefunden wird.

    {
      "jekyll_auto_find_paths": true
    }

## Shortcuts
Hier noch eine kleine Übersicht an hilfreichen Shortcuts innerhalb von Sublime Text:

* CMD+R <br/>
  Zeigt innerhalb einer Datei eine Liste von Methoden, Funktionen und anderen darin befindlichen 
Symbolen an

* CMD+P <br/>
  Dateisuche innerhalb des Projekts

* CMD+Click <br/>
  Das finde ich wirklich sehr geil! Man hält die CMD Taste gedrückt und klickt an weitere Stellen in
  der Datei um weitere Cursor Positionen zu erstellen. Wenn man dann schreibt, wird an allen Positionen
  gleichzeitig geschrieben. Mit ESC kann der Modus verlassen werden.

* CMD+SHIFT+P <br/>
  Damit wird die Command Palette geöffnet.

* CMD+CTRL+P <br/>
  Zwischen Projekten kann direkt gewechselt werden. Das Menu dazu wird über diesen Shortcut aufgerufen.

Sublime Text ist ein wirklich mächtiges Werkzeug, bleibt aber extrem Performant dabei. Wenn man also
auf ein schlichtes GUI steht und eher mit der Tastatur als mit der Maus verheiratet ist, dann ist 
Sublime Text genau der richtige Editor!

## PackageControl Links
<https://packagecontrol.io/packages/AngularJS>{:target="_blank"}

<https://packagecontrol.io/packages/Better%20Completion>{:target="_blank"}

<https://packagecontrol.io/packages/PHP%20Completions%20Kit>{:target="_blank"}

<https://packagecontrol.io/packages/PHP-Twig>{:target="_blank"}

<https://packagecontrol.io/packages/WordPress%20Completions>{:target="_blank"}

<https://packagecontrol.io/packages/Siteleaf%20Liquid%20Syntax>{:target="_blank"}

<https://packagecontrol.io/packages/Color%20Highlighter>{:target="_blank"}

<https://packagecontrol.io/packages/DocBlockr>{:target="_blank"}

<https://packagecontrol.io/packages/SublimeOnSaveBuild>{:target="_blank"}

<https://packagecontrol.io/packages/SASS%20Build>{:target="_blank"}

<https://packagecontrol.io/packages/Minify>{:target="_blank"}

<https://packagecontrol.io/packages/Simple%20FTP%20Deploy>{:target="_blank"}

<https://packagecontrol.io/packages/Jekyll>{:target="_blank"}