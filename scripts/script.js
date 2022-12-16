//#region Harmadik feladat
/**
 * Paralelogramma területének kiszámító függvénye oldallal és magassággal
 * @param oldal az alap hossza centiméterben
 * @param magassag a magasság gossza centiméterben
 * @returns a terület
 */
function teruletOldallalEsMagassaggal(oldal, magassag) {
    return oldal * magassag;
}
/**
 * Paralelogramma területének kiszámító függvénye oldalakkal és közrefogott szöggel
 * @param oldal1 az egyik oldal hossza centiméterben
 * @param oldal2 a másik oldal hossza centiméterben
 * @param szog a közrefogott szög nagysága fokban
 * @returns a terület
 */
function teruletOldalakkalEsSzoggel(oldal1, oldal2, szog) {
    return oldal1 * oldal2 * Math.sin(fokokbolRadian(szog));
}
/**
 * Fok értékből radiánt megadó függvény
 * @param fok a kiszámítandó érték
 * @returns a kiszámítandó érték radiánban
 */
function fokokbolRadian(fok) {
    var pi = Math.PI;
    return fok * (pi / 180);
}
/**
 * Random string generáló függvény
 * @param stringek a sztringek tömbje, mely legalább 3 hosszú
 * @returns 3 random stringet a tömbből
 */
function randomString(stringek) {
    if (stringek.length < 3) {
        return [];
    }
    return stringek.sort(function () { return 0.5 - Math.random(); }).slice(0, 3);
}
//#endregion
//#region Negyedik feladat
var items = [];
/**
 * Új elemet ad hozzá a termékek objektumához
 */
function addNewItem() {
    var name = document.getElementById("input-name").value
        ? document.getElementById("input-name").value
        : "Termék" + (this.items.length + 1);
    var cost = document.getElementById("input-cost").value
        ? document.getElementById("input-cost").value
        : 0;
    this.items.push({ name: name, cost: cost });
    document.getElementById("input-name").value = "";
    document.getElementById("input-cost").value = "";
}
/**
 * Kiszámolja az átlagot, a legkisebb elemet és a szórást
 */
function calculateData() {
    document.getElementById("shop-calculations").classList.remove("hidden");
    document.getElementById("shop-calculations").classList.add("shown");
    if (this.items.length >= 3) {
        var arak = this.items.map(function (element) { return parseInt(element.cost); });
        var legkisebbAr_1 = Math.min.apply(Math, arak);
        var legkisebbTermek = this.items.find(function (element) { return element.cost == legkisebbAr_1; });
        var atlagAr = arak.reduce(function (a, b) { return a + b; }, 0) / arak.length;
        document.getElementById("smallest-cost").innerHTML =
            legkisebbAr_1.toString();
        document.getElementById("smallest-name").innerHTML = legkisebbTermek.name;
        document.getElementById("average-cost").innerHTML = atlagAr.toString();
        document.getElementById("standard-deviance-cost").innerHTML =
            this.atlagokSzorasa(arak).toString();
    }
}
/**
 * Kiszámolja az átlagok szórását
 * @param tomb az árak, melyek szórása kell
 * @returns a tömb átlagainak szórását
 */
function atlagokSzorasa(tomb) {
    var atlag = tomb.reduce(function (a, b) {
        return a + b;
    }, 0) / tomb.length;
    tomb = tomb.map(function (element) {
        return Math.pow((element - atlag), 2);
    });
    var sum = tomb.reduce(function (a, b) { return a + b; }, 0);
    var variancia = sum / tomb.length;
    return Math.sqrt(variancia);
}
//#endregion
