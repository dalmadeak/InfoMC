//#region Harmadik feladat

/**
 * Paralelogramma területének kiszámító függvénye oldallal és magassággal
 * @param oldal az alap hossza centiméterben
 * @param magassag a magasság gossza centiméterben
 * @returns a terület
 */
function teruletOldallalEsMagassaggal(oldal: number, magassag: number): number {
  return oldal * magassag;
}

/**
 * Paralelogramma területének kiszámító függvénye oldalakkal és közrefogott szöggel
 * @param oldal1 az egyik oldal hossza centiméterben
 * @param oldal2 a másik oldal hossza centiméterben
 * @param szog a közrefogott szög nagysága fokban
 * @returns a terület
 */
function teruletOldalakkalEsSzoggel(
  oldal1: number,
  oldal2: number,
  szog: number
): number {
  return oldal1 * oldal2 * Math.sin(fokokbolRadian(szog));
}

/**
 * Fok értékből radiánt megadó függvény
 * @param fok a kiszámítandó érték
 * @returns a kiszámítandó érték radiánban
 */
function fokokbolRadian(fok: number): number {
  const pi = Math.PI;
  return fok * (pi / 180);
}

/**
 * Random string generáló függvény
 * @param stringek a sztringek tömbje, mely legalább 3 hosszú
 * @returns 3 random stringet a tömbből
 */
function randomString(stringek: string[]): string[] {
  if (stringek.length < 3) {
    return [];
  }
  return stringek.sort(() => 0.5 - Math.random()).slice(0, 3);
}

//#endregion

//#region Negyedik feladat

let items: Object[] = [];

/**
 * Új elemet ad hozzá a termékek objektumához
 */
function addNewItem(): void {
  const name = (<HTMLInputElement>document.getElementById("input-name")).value
    ? (<HTMLInputElement>document.getElementById("input-name")!).value
    : "Termék" + (this.items.length + 1);
  const cost = (<HTMLInputElement>document.getElementById("input-cost")).value
    ? (<HTMLInputElement>document.getElementById("input-cost")!).value
    : 0;
  this.items.push({ name: name, cost: cost });

  (<HTMLInputElement>document.getElementById("input-name")!).value = "";
  (<HTMLInputElement>document.getElementById("input-cost")!).value = "";
}

/**
 * Kiszámolja az átlagot, a legkisebb elemet és a szórást
 */
function calculateData(): void {
  document.getElementById("shop-calculations")!.classList.remove("hidden");
  document.getElementById("shop-calculations")!.classList.add("shown");

  if (this.items.length >= 3) {
    let arak: number[] = this.items.map((element) => parseInt(element.cost));
    const legkisebbAr = Math.min(...arak);
    const legkisebbTermek = this.items.find(
      (element) => element.cost == legkisebbAr
    );
    const atlagAr = arak.reduce((a, b) => a + b, 0) / arak.length;
    document.getElementById("smallest-cost")!.innerHTML =
      legkisebbAr.toString();
    document.getElementById("smallest-name")!.innerHTML = legkisebbTermek.name;
    document.getElementById("average-cost")!.innerHTML = atlagAr.toString();
    document.getElementById("standard-deviance-cost")!.innerHTML =
      this.atlagokSzorasa(arak).toString();
  }
}

/**
 * Kiszámolja az átlagok szórását
 * @param tomb az árak, melyek szórása kell
 * @returns a tömb átlagainak szórását
 */
function atlagokSzorasa(tomb: number[]): number {
  const atlag =
    tomb.reduce((a, b) => {
      return a + b;
    }, 0) / tomb.length;

  tomb = tomb.map((element) => {
    return (element - atlag) ** 2;
  });

  const sum = tomb.reduce((a, b) => a + b, 0);

  const variancia = sum / tomb.length;

  return Math.sqrt(variancia);
}

//#endregion
