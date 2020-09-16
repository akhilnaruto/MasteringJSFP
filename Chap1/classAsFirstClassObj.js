const makeSaluteClass =  term => class {
    constructor(x){
        this.x = x;
    }

    salute(y){
        console.log(`${this.x} says "${term}" to ${y}`);
    }
}

const Spanish =  makeSaluteClass("hola");
new Spanish("ALPHA").salute("BETA");
// prints ALPHA says "hola" to BETA

new (makeSaluteClass("HELLO"))("GAMMA").salute("DELTA");
//prints GAMMA says "HELLO" to DELTA

const fullSalute = (c, x, y) => new c(x).salute(y);
const French = makeSaluteClass("BON JOUR");
fullSalute(French, "EPSILON", "ZETA");
//prints EPSILON says "BON JOUR" to ZETA