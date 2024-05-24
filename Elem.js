export default class Elem {
  #id;
  #ertek = " ";
  #szuloElem;
  #divElem;

  constructor(id, ertek, szuloElem) {
    this.#id = id;
    this.#ertek = ertek;
    this.#szuloElem = szuloElem;

    this.#megjelenit();

    /* Rákattintunk az elemre */

    /* Egy osztályban a "this" egy konkrétum példányt jelent, de eseménykezelőben function névtelen fg-vel használva azt a HTML elemet jelenti, amelyik az eseményt kiváltotta (pl. event.target), main fg-vel az objektum példányára mutat */
    this.#divElem = this.#szuloElem.children("div:last-child");
    this.#divElem.on("click", () => {
      if (this.#ertek === " ") {
        this.#esemenyTrigger("lepes");
      }
    });
  }

  #megjelenit() {
    let txt = `<div><p>${this.#ertek}</p></div>`;
    this.#szuloElem.append(txt);
  }

  /* információ átadás */
  #esemenyTrigger(esemenyNev) {
    /* létrehoz egy saját eseményt "esemenyNev" néven,
    és átad magáról adatokat (detail: ...) */
    const e = new CustomEvent(esemenyNev, { detail: this.#id });
    window.dispatchEvent(e);
  }
}
