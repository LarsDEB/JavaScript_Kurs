





      Javascript Lernplan

# Woche 1 – JavaScript‑Grundlagen

## Was du in dieser Woche lernst
- Variablen mit `let` und `const`  
- Datentypen: `number`, `string`, `boolean`, `undefined`, `null`  
- Rechnen & Strings verketten  
- `if`, `else if`, `else`  
- `console.log()` als Grundlage fürs Testen  

This week legt die **Grundbausteine** deines JavaScript‑Verständnisses.

***

## 1. Variablen: `let` und `const`

### Was ist das?
- Eine **Variable** ist ein „Behälter“ für Daten (z.B. `let punkte = 0;`).  
- `let` → Wert kann sich ändern.  
- `const` → Wert wird **nur einmal gesetzt** und dann nicht mehr überschrieben.  
- `var` ignorierst du vorerst; das ist veraltet. [cancode](https://www.cancode.de/blog-article/die-eigenheiten-von-var-let-und-const-in-javascript)

### Warum ist das wichtig?
- Jede Funktion und jede Logik beginnt mit Variablen, in denen du Daten speicherst.  
- Richtiges Verständnis von `let`/`const` verhindert später viele Fehler.

### Suchbegriffe / Video‑Tipps
- `JavaScript let const Unterschied Deutsch`  
- `JavaScript Variablen erklären Anfänger`  
- Video‑Beispiel: „JavaScript Tutorial für Anfänger – Teil 2: Variablen“ (YouTube, deutsch). [youtube](https://www.youtube.com/watch?v=Yj05-Ncn3zk)

***

## 2. Datentypen

### Was ist das?
- `number`: 5, -3, 3.14  
- `string`: `"Hallo"`, `'Welt'`  
- `boolean`: `true` / `false`  
- `undefined` / `null`: „nicht gesetzt“ bzw. „bewusst leer“  

JavaScript ist **dynamisch typisiert**: Eine Variable kann erst eine Zahl, dann einen Text enthalten. Wichtig: Du solltest trotzdem verstehen, welchen Typ du gerade nutzt. [youtube](https://www.youtube.com/watch?v=_0GsSJX74e0)

### Suchbegriffe
- `JavaScript Datentypen einfach erklärt`  
- `JavaScript number string boolean undefined null`  

***

## 3. Rechnen und Strings verketten

### Was ist das?
- Rechnen: `+`, `-`, `*`, `/`, `%` (Rest).  
- Strings verketten: `"Hallo " + name` → `"Hallo Max"`.  
- Du schreibst viele Tests mit `console.log()` und siehst, was da rauskommt.

### Suchbegriffe
- `JavaScript Grundrechenarten erklären`  
- `JavaScript Strings verketten Anfänger`  

***

## 4. `if`, `else if`, `else` (Bedingungen)

### Was ist das?
- `if (bedingung) { ... }` → führt Code nur aus, wenn etwas wahr ist.  
- `else if`, `else` erweitern die Entscheidung.  
- Vergleichsoperatoren: `>`, `<`, `>=`, `<=`, `===`, `!==`.  

Damit baust du später Spiele‑Logik, Validierungen, Menüs etc.

### Suchbegriffe
- `JavaScript if else Anfänger erklärt`  
- `JavaScript Vergleichsoperatoren === ==`  
- Video: „if else – JavaScript Tutorial für Anfänger“ (deutsch). [mediaevent](https://www.mediaevent.de/javascript/if-then-else.html)

***

## 5. `console.log()` – dein Entwickler‑Fenster

### Was ist das?
- `console.log("Test");` → zeigt Text in der Browser‑Konsole.  
- Kein Teil der Website für den Nutzer, sondern nur für dich.

### Suchbegriff
- `JavaScript console.log erklären Anfänger`  

***

## 6. Wie du Woche 1 praktisch gestaltest

- **Tag 1–2:** Variablen & Datentypen (Suchbegriff oben).  
- **Tag 3–4:** Rechnen & Strings, `console.log()` nutzen.  
- **Tag 5–7:** Taschenrechner‑Challenge in der Konsole (ohne Code kopieren, nur deine Logik prüfen).

***

# Woche 2 – Funktionen & einfache Schleifen

## Was du in dieser Woche lernst
- Funktionen definieren und aufrufen  
- Parameter und `return`‑Werte  
- `for`‑Schleife  
- `while`‑Schleife  

Du lernst, **Wiederholung zu automatisieren** und **Logik in wiederverwendbare Blöcke** zu packen.

***

## 1. Funktionen

### Was ist das?
- `function meineFunktion(a, b) { ... }` → Name, Parameter, Code‑Block.  
- `return` → Wert, der aus der Funktion herauskommt.  

Funktionen vermeiden, dass du denselben Code 100‑mal schreibst.

### Suchbegriffe
- `JavaScript Funktionen erklären return`  
- `JavaScript function Grundlagen Anfänger`  
- Video: „JavaScript Funktionen – einfach erklärt“ (deutsch). [programmieren-starten](https://programmieren-starten.de/javascript-kurs-details/)

***

## 2. `for`‑Schleife

### Was ist das?
- `for (let i = 0; i < 10; i++) { ... }` → wiederhole etwas 10‑mal.  
- `i` ist der Zähler, der schrittweise erhöht wird.  

Schleifen sind wichtig für Arrays, Zahlenreihen, Animationen, etc.

### Suchbegriffe
- `JavaScript for Schleife erklärt Anfänger`  
- `JavaScript for loop einfach erklärt deutsch`  

***

## 3. `while`‑Schleife

### Was ist das?
- `while (bedingung) { ... }` → wiederhole, solange `bedingung` wahr ist.  

Nützlich, wenn du nicht von vornherein weißt, wie viele Schritte nötig sind (z.B. „solange Nutzer nicht „q“ eingegeben hat“).

### Suchbegriffe
- `JavaScript while Schleife erklärt`  
- `JavaScript while loop Anfänger`  

***

## 4. Praktische Aufteilung Woche 2

- **Tag 1–2:** Funktionen, `return`, Parameter üben.  
- **Tag 3–4:** `for`‑Schleife mit Zahlen & später Arrays.  
- **Tag 5–6:** Fakultätsrechner und Wiederholungs‑Text‑Projekt.  
- **Tag 7:** Refactoring & Code aufräumen.

***

# Woche 3 – Arrays & einfache Spiele‑Logik

## Was du in dieser Woche lernst
- Arrays anlegen, lesen, ändern  
- `for` über Arrays  
- `Math.random()` für Zufallszahlen  
- Mini‑Spiele‑Logik (z.B. Wortraten, Zahlenraten)

Arrays sind die Basis für komplexere Strukturen (z.B. Nutzerliste, Fragenliste, Highscores). [youtube](https://www.youtube.com/watch?v=1y0X1s4csWI)

***

## 1. Arrays

### Was ist das?
- `[1, 2, 3]`, `["Apfel", "Birne"]` → Liste von Werten.  
- Zugriff über Index: `namen[0]`.  
- Methoden: `.length`, `.push()`, `.pop()` (später auch `.indexOf()`, `.slice()`).

### Suchbegriffe
- `JavaScript Arrays erklärt Anfänger`  
- `JavaScript Arrays Grundlagen Tutorial`  

***

## 2. Schleife über ein Array

### Was ist das?
- `for (let i = 0; i < namen.length; i++) { ... }` → alle Elemente durchlaufen.  

Damit zählst du Punkte, suchst bestimmte Werte oder baust eine Punkte‑Anzeige.

### Suchbegriffe
- `JavaScript for Schleife über Array`  
- `JavaScript Array durchlaufen Anfänger`  

***

## 3. `Math.random()`

### Was ist das?
- `Math.random()` → Zufallszahl zwischen 0 und 1.  
- Mit `Math.floor(...)` kannst du z.B. Zahlen zwischen 1 und 10 erzeugen.

Damit baust du Rätsel, Spiele, Zufallsfragen.

### Suchbegriffe
- `JavaScript Math.random erklärt`  
- `JavaScript Zufallszahl Anfänger`  

***

## 4. Praktische Aufteilung Woche 3

- **Tag 1–2:** Arrays & einfache Aufgaben (z.B. größte Zahl bestimmen).  
- **Tag 3–4:** `Math.random()` + kleine Zufalls‑Mini‑Aufgaben.  
- **Tag 5–6:** Wortraten‑Spiel (Konsole‑Version).  
- **Tag 7:** Experimentieren & eigene kleine Spiele erfinden.

***

# Woche 4 – DOM‑Grundlagen (erste Interaktion mit der Seite)

## Was du in dieser Woche lernst
- `document.getElementById`, `querySelector`  
- `textContent` zum Ändern von Text  
- `classList` zum Hinzufügen/Entfernen von Klassen  
- `addEventListener` statt `onclick` im HTML  

Damit machst du deinen HTML‑Seiten das erste Mal „lebendig“. [youtube](https://www.youtube.com/watch?v=8J8csC92L2c)

***

## 1. DOM‑Selektoren

### Was ist das?
- `document.getElementById("idName")` → ein Element mit `id` auswählen.  
- `document.querySelector(".klasse")` → erstes Element mit CSS‑Selektor auswählen.  

Das ist dein „Brücke“ von JavaScript zu deiner Seite.

### Suchbegriffe
- `JavaScript DOM getElementById querySelector`  
- `JavaScript DOM Grundlagen Tutorial deutsch`  

***

## 2. Text & Klasse ändern

### Was ist das?
- `element.textContent = "Neuer Text";` → Textinhalt ändern.  
- `element.classList.add("farbig")` → CSS‑Klasse hinzufügen.  

Damit kannst du Labels, Buttons, Status mit Farben anpassen.

### Suchbegriffe
- `JavaScript DOM textContent classList`  
- `JavaScript DOM Klassen hinzufügen Anfänger`  

***

## 3. `addEventListener`

### Was ist das?
- `element.addEventListener("click", function() { ... });`  
- Trennt Logik vom HTML: Kein `onclick` im HTML, alles in JS.

### Suchbegriffe
- `JavaScript addEventListener click`  
- `JavaScript Event Listener erklärt`  

***

## 4. Praktische Aufteilung Woche 4

- **Tag 1–2:** DOM‑Selektoren & einfache Textänderungen.  
- **Tag 3–4:** Klick‑Counter & Farbumschalter.  
- **Tag 5–6:** Kombination beider Projekte.  
- **Tag 7:** Refactoring: saubere Trennung von HTML, CSS, JS.

***

# Woche 5 – Formulare & Events

## Was du in dieser Woche lernst
- `input`, `checkbox`, `button` mit JavaScript auslesen  
- `submit`‑Event & `preventDefault()`  
- einfache Frontend‑Validierung (z.B. „nicht leer“)  

Formulare sind die Schnittstelle zwischen Nutzer und Code. Hier lernst du, wie du **Eingaben kontrollierst**. [programmieren-starten](https://programmieren-starten.de/javascript-kurs-details/)

***

## 1. Form‑Elemente ansprechen

### Was ist das?
- `document.querySelector("#nameInput").value` → Text aus Eingabefeld holen.  
- `document.querySelector("#agb").checked` → Wert einer Checkbox auslesen.  

Du baust damit Login‑Forms, Registrierungen, Einstellungen.

### Suchbegriffe
- `JavaScript Formular Eingaben lesen`  
- `JavaScript Form Validation Anfänger`  

***

## 2. `submit`‑Event & `preventDefault()`

### Was ist das?
- `form.addEventListener("submit", function(e) { e.preventDefault(); ... });`  
- Verhindert Neuladen der Seite, JS kann die Daten verarbeiten.

### Suchbegriffe
- `JavaScript Form submit preventDefault`  
- `JavaScript Formular event.preventDefault`  

***

## 3. Praktische Aufteilung Woche 5

- **Tag 1–2:** Formulare & Daten auslesen.  
- **Tag 3–4:** Einfache Registrierung mit Validierung.  
- **Tag 5–6:** Checkbox‑Toggler & zusätzliche Validierungsregeln.  
- **Tag 7:** Fehlerfälle testen (z.B. leere Eingaben, ungültige Emails).

***

# Woche 6 – Objekte & kleine Datenstrukturen

## Was du in dieser Woche lernst
- Objekte als Datensätze: `{ name: "Max", age: 15 }`  
- Objektarrays: `[{ name: "Max" }, { name: "Anna" }]`  
- Suchen & Filtern in Objektarrays  

Objekte sind die Basis für spätere Frameworks wie React, Vue. [youtube](https://www.youtube.com/watch?v=8J8csC92L2c)

***

## 1. Objekte

### Was ist das?
- `const user = { name: "Max", age: 15 };`  
- Zugriff: `user.name` oder `user["name"]`.  

Objekte gruppieren zusammengehörige Daten.

### Suchbegriffe
- `JavaScript Objekte erklärt Anfänger`  
- `JavaScript Objekt Grundlagen`  

***

## 2. Objektarrays & Filtern

### Was ist das?
- `const users = [ { name: "Max", age: 15 }, { name: "Anna", age: 16 } ];`  
- `for`‑Schleife über `users`, um nach Bedingungen zu filtern.  

Damit baust du z.B. Nutzer‑Listen, Produktkataloge, To‑Do‑Listen.

### Suchbegriffe
- `JavaScript Objektarray filtern`  
- `JavaScript Objektarrays durchlaufen`  

***

## 3. Praktische Aufteilung Woche 6

- **Tag 1–2:** Einfache Objekte & Objektarrays.  
- **Tag 3–4:** User‑Liste mit Suche nach Name/Alter.  
- **Tag 5–6:** To‑Do‑Datenstruktur ohne UI.  
- **Tag 7:** eigene kleine „Datenbank“ erfinden (z.B. Punkte‑Tabelle).

***

# Woche 7 – Echte To‑Do‑Liste (mit DOM)

## Was du in dieser Woche lernst
- Dynamisch DOM‑Elemente erstellen (`createElement`, `appendChild`)  
- Liste von To‑Dos im DOM anzeigen  
- Status ändern (`done`/`not done`)  

To‑Do‑Listen sind ein **klassisches Übungs‑Projekt**, das alle vorherigen Themen miteinander verbindet. [youtube](https://www.youtube.com/watch?v=1y0X1s4csWI)

***

## 1. Dynamische DOM‑Erzeugung

### Was ist das?
- `const li = document.createElement("li");`  
- `li.textContent = "Neues To‑Do";`  
- `document.querySelector("#todoList").appendChild(li);`  

Du baust je nach Daten neue Elemente.

### Suchbegriffe
- `JavaScript createElement appendChild`  
- `JavaScript To Do List DOM`  

***

## 2. Status‑Logik & UI‑Trennung

### Was ist das?
- Jedes To‑Do hat ein `done`‑Feld.  
- Du trennst:  
  - Logik‑Funktionen (Daten verändern)  
  - UI‑Funktionen (DOM neu zeichnen).  

Damit wirst du Code viel wiederverwendbarer.

### Suchbegriffe
- `JavaScript To Do List Projekt Anfänger`  
- `JavaScript To Do App ohne framework`  

***

## 3. Praktische Aufteil_DGRAMlche Aufteilung Woche 7

- **Tag 1–2:** HTML‑Struktur & DOM‑Erzeugung testen.  
- **Tag 3–4:** To‑Do‑Hinzufügen‑Logik.  
- **Tag 5–6:** Status‑Wechsel (erledigt/nicht erledigt).  
- **Tag 7:** Refactoring & saubere Code‑Struktur.

***

# Woche 8 – Mini‑Spiel & Abschluss

## Was du in dieser Woche lernst
- Globale Variablen kontrolliert nutzen  
- Spiellogik mit Zustand  
- Projektstruktur: Logik, UI‑Funktionen, Events  
- Refactoring & Code‑Qualität  

Ein Mini‑Spiel zeigt, ob du wirklich alles verstanden hast – und ist ein starkes Showcase‑Projekt für dein

Jetzt bist du Javascript Profi! (fast😂)

