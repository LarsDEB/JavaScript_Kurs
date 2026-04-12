Aufgaben für Woche 4 in script.js
   Arbeite nur in script.js (ansonsten nichts ändern!).

Grundlagen‑Aufgaben 
    1. Aufgabe hinzufügen

Wenn du auf #addTaskBtn klickst, soll der Text aus #taskInput

in eine neue <li> umgewandelt werden,

und in ul#taskList eingefügt werden.

Wenn das Feld leer ist, soll nichts passieren.

Eingabe löschen nach Hinzufügen

Nach dem Hinzufügen soll das Eingabefeld #taskInput wieder leer sein.

    2. Tipp‑Anzeige

Lege ein Array tips mit mindestens 5 kleinen Lern‑Tipps als Strings.

Wenn auf #tipBtn geklickt wird, soll ein zufälliger Tipp aus dem Array
in #tipOutput mit innerHTML eingefügt werden.

    3. Design‑Wechsel

Wenn auf #themeBtn geklickt wird, soll:

der body die Klasse dark-mode bekommen,

oder verlieren, wenn sie schon da ist.

Verwende classList.toggle("dark-mode").

Erweiterte Aufgaben
    1. Mindestlänge für Aufgaben

Wenn der Text im #taskInput weniger als 3 Zeichen hat,
soll die Aufgabe nicht hinzugefügt werden,
und eine kurze Warn‑Meldung in #tipOutput erscheinen.

    2. Aufgaben zählen

Zähle, wie viele Aufgaben gerade in der Liste sind,
und zeige die Anzahl am Ende der Liste (z.B. Anzahl Aufgaben: 3).

    3. Löschen aller Aufgaben

Füge einen neuen Button in HTML ein (z.B. #clearAllTasks).

Wenn dieser Button geklickt wird, soll alle Aufgaben aus #taskList entfernt werden.

    4. Aufgabe markieren als „erledigt“

Wenn du auf eine <li> in #taskList klickst,
soll sie eine neue Klasse done bekommen (CSS kannst du dir selbst in style.css ausdenken, z.B. durchgestrichen oder grau).
