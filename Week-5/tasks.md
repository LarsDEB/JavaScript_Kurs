Bearbeite nur in script.js.

1. Aufgabe hinzufügen
Wenn du auf #addTaskBtn klickst, soll:

der Text aus #taskInput genommen werden,

in ein neues <li> gewandelt werden,

und in ul#taskList eingefügt werden.

Wenn das Feld leer ist oder weniger als 3 Zeichen hat:

soll #statusMessage z.B. mit „Fehler: Bitte mindestens 3 Zeichen.“ aktualisiert werden,

und die Aufgabe nicht hinzugefügt werden.

2. Aufgabe markieren (Toggle „done“)
Jede <li> in #taskList soll anklickbar sein.

Wenn du auf eine Aufgabe klickst:

soll sie die Klasse done bekommen,

wenn sie schon done hat, soll sie sie wieder verlieren.

Nutze classList.toggle("done").

3. Aufgabe löschen mit kleinen Delete‑Button
Lege in Javascript bei der Erzeugung einer Aufgabe einen kleinen Button mit Klasse deleteBtn rechts in die <li> ein.

Wenn du auf diesen Button klickst:

soll nur diese eine Aufgabe gelöscht werden (mit remove()).

Aktualisiere danach #statusMessage und #taskCounter.

4. Filter: alle / offen / erledigt
Wenn du auf #filterAll klickst:

werden alle <li> sichtbar gemacht.

Wenn du auf #filterOpen klickst:

werden nur die Aufgaben ohne done angezeigt.

Wenn du auf #filterDone klickst:

werden nur Aufgaben mit done angezeigt.

Tipp:
Setze den display auf list-item oder none, oder verwende Klassen, die du vom CSS her steuerst.

5. Zähler und Status
In #taskCounter soll immer stehen:

X Aufgaben insgesamt, Y offen.

z.B. 3 Aufgaben insgesamt, 2 offen.

In #statusMessage:

Wenn keine Aufgaben existieren: „Keine Aufgaben vorhanden.“

Wenn mindestens eine Aufgabe existiert: z.B. „Du hast X Aufgaben.“

Aktualisiere beide immer nach jedem Hinzufügen, Löschen oder Markieren.

6. Motivationstipp
Leg ein Array motivationTips mit mindestens 5 kurzen Motivationssätzen an.

Wenn du auf #motivationBtn klickst:

soll ein zufälliger Tipp aus dem Array in #motivationOutput mit textContent eingefügt werden.

7. Optimierung (Profi‑Anspruch)
Cache wichtige Elemente einmal am Anfang (z.B. const taskListEl = document.querySelector('#taskList');),
statt sie in jedem Event neu zu selektieren.

Schreibe eine Funktion updateUI() (z.B. für Status, Zähler, Filter), die du nach jeder Änderung aufrufst.

8. Zusatzaufgabe: localStorage (optional, etwas schwerer)
Speichere das Array mit Aufgaben in localStorage (JSON.stringify).

Beim Start der Seite:

lies aus localStorage und fülle die Liste wieder mit createElement.

Achte darauf, dass jede Aufgabe beim Laden ihren Zustand (offen/done) beibehält.

