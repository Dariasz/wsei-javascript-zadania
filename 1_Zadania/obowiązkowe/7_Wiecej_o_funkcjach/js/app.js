/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Zdefiniowanie funkcji jeden
function jeden() {

  //Przypisanie wartosci 1 do zmiennej - zmienna1
  var zmienna1 = 1

  //Wywolanie funkcji dwa
  function dwa() {

    //Wypisanie zmiennej
    console.log(zmienna1)

    //Przypisanie wartosci w funkcji dwa
    var zmienna2 = 3
  }

  //Wywolanie funkcji dwa
  dwa()

  //Wypisanie zmiennej2
  console.log(zmienna2)
}

/// Ponieważ zmienna2 jest odpalana w funkcji dwa i ta zmienna jest tylko tam przypisana, a nie w całej funkcji jeden
jeden()
