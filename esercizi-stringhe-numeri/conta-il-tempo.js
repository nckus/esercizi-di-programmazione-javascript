/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var seconds = 12560;
var hour = seconds/3600;
hour = (Math.trunc(hour)); //usando la funzione Math.trunc() tolgo la parte decimale del risultato

console.log(hour + ' ore');

var min = 3600 * hour;
var min1 = seconds - min;
var min2 = min1/60;
min2 = (Math.trunc(min2));

console.log(min2 +' minuti'); //usando la funzione Math.trunc() tolgo la parte decimale del risultato

var sec = min2 * 60;
var sec1 = min1 - sec;

console.log(sec1 +' secondi');
