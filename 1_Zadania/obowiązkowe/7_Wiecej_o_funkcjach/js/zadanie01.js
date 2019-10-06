
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Zdefiniowanie funkcji sortArray
function sortArray() {

    //Przypisanie array'a do zmiennej
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Sortowanie tabeli
    points.sort(function (a, b) {
        //Porównanie, które jest mniejsze
        return a - b;
    });

    //Zwrócenie posortowanej tabeli
    return points;
}

//Wywołqnie funkcji
sortArray();
