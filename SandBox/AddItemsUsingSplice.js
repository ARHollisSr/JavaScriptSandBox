//example 1
function colorChange(arr, index, newColor) {
    arr.splice(index, 1, newColor);
    return arr;
}

let colorScheme = ['#878787', '#a4325', '#b3425', '#c35532', '#g235234'];
colorScheme = colorChange(colorScheme, 2, '#3334543');

//removed #b3425 and added #3334543

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavendarBlush', 'PaleTurqoise', 'FireBrick']));
