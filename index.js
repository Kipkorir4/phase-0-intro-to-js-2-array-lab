let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat () {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat () {
    cats.shift();
}

function appendCat () {
    let arr = [...cats]
    arr.push("Broom")
    return arr
}

function prependCat () {
    let arr = [...cats]
    arr.unshift("Arnold")
    return arr
}

function removeLastCat () {
    let arr = [...cats]
    arr.pop()
    return arr
}

function removeFirstCat () {
    let arr = [...cats]
    arr.shift()
    return arr
}
