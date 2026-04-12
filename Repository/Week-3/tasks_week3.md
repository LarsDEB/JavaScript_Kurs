
1. Arrays und Grundoperationen
Datei‑Vorschlag: week3-arrays.js

    1. Erstelle ein Array favoriteNumbers mit 5 Zahlen, die du magst.

Aufgabe:

Gib die erste, mittlere und letzte Zahl mit console.log aus.

Gib die Länge des Arrays aus.

Erstelle ein Array favoriteFoods mit 5 Essen.

Aufgabe:

Füge ein Essen am Ende hinzu.

Entferne das erste Element.

Prüfe mit includes, ob "Pizza" im Array ist, und gib eine passende Nachricht aus.

    2. Erstelle ein Array results und speichere dort 3 Beispiel‑Ergebnisse deines Taschenrechners (z.B. 12, 42, 1337).

Aufgabe:

Gib alle Ergebnisse nacheinander in der Konsole aus.

Gib das größte Ergebnis aus (erstmal „zu Fuß“, ohne Math.max).

2. for‑Schleifen (Zählen, Arrays durchlaufen)
Datei‑Vorschlag: week3-for-loops.js

    1. Schreibe eine for‑Schleife, die von 1 bis 10 zählt.

Aufgabe:

Gib alle Zahlen 1–10 aus.

Gib nur die geraden Zahlen aus.

Schreibe eine for‑Schleife, die die Zahlen von 10 runter bis 1 ausgibt.

Nutze ein Array favoriteNumbers (von oben):

Aufgabe:

Lauf mit einer for‑Schleife durch das Array und gib für jedes Element aus:
"Zahl X an Index i"

Berechne die Summe aller Zahlen im Array mit einer for‑Schleife.

    2. „Mini‑Highscore“:

Du hast ein Array scores = [10, 50, 20, 70, 40].

Aufgabe:

Finde mit einer for‑Schleife den höchsten Score und gib ihn aus.

Finde den Durchschnitt der Scores (Summe / Anzahl).

3. do … while – Eingabe mindestens einmal
Datei‑Vorschlag: week3-do-while.js

    1. Schreibe eine do … while‑Schleife, die so lange nach einem Passwort fragt, bis "geheim" eingegeben wurde.

Aufgabe:

Verwende prompt und console.log("Erlaubt"), wenn es stimmt.

Der Benutzer muss mindestens einmal gefragt werden.

    1. Schreibe eine do … while‑Schleife, die so lange eine Zahl abfragt, bis eine gültige Zahl zwischen 1 und 10 eingegeben wurde.

Aufgabe:

Wenn die Eingabe ungültig ist, gib eine Fehlermeldung aus.

Am Ende gib "Deine Zahl war: X" aus.

Verknüpfe das mit deinem Taschenrechner (eher in einer separaten Datei oder Kopie):

Statt while (true) für die Gesamtschleife:

Nutze eine do … while‑Struktur, die mindestens eine Rechnung ausführt und erst bei /stop abbricht.

4. Einfache Objekte (Werte „zusammenpacken“)
Datei‑Vorschlag: week3-objects.js

    1. Erstelle ein Objekt person mit Eigenschaften:

name (String)

age (Number)

isVegetarian (Boolean)

Aufgabe:

Gib eine kleine Beschreibung in einem Satz aus, z.B.
"NAME ist AGE Jahre alt und is(s)t vegetarisch/nicht vegetarisch."

    2. Erstelle ein Objekt calculator, das nicht deinen ganzen Rechner ersetzt, sondern nur als „Datenobjekt“ dient:

Eigenschaften:

lastResult (Number oder null)

operationsCount (Anzahl ausgeführter Rechnungen)

Aufgaben:

Setze calculator.lastResult auf irgendein Ergebnis.

Erhöhe operationsCount dreimal.

Gib beides aus.

    3. Verknüpfung mit Arrays:

Erstelle ein Array history, das Objekte enthält, z.B. 3 Einträge mit:

operand1

operand2

operator

result

Aufgabe:

Geh mit einer for‑Schleife über history und gib jede Rechnung als Text aus, z.B.
"3 + 5 = 8".

5. Bonus: Deine Rechner‑History (wenn du wieder Lust hast)
Das ist nicht für jetzt, sondern für später, wenn du wieder Motivation hast:

Erstelle in einer neuen Datei (week3-calculator-history.js) eine abgespeckte Kopie deines Rechners.

Ergänze:

Ein Array history, in das du bei jeder erfolgreichen Rechnung ein Objekt wie oben schreibst.

Eine Funktion showHistory(), die alle bisherigen Rechnungen mit einer for‑Schleife ausgibt.

Einen Befehl /history, der showHistory() aufruft.

Das würde fast alle Week‑3‑Themen (Arrays, for, Objekte) direkt an deinen Rechner koppeln, ist aber nicht nötig, um die Woche „bestanden“ zu haben.