export function roll(sides, dice, rolls) {
    var results = [];
    for (let i = 0; i < rolls; i++){
        var singleVal = 0
        for (let j = 0; j < dice; j++){
            var rolledNumber = 1 + Math.floor(Math.random() * sides);
            singleVal += rolledNumber
        }
        results.push(singleVal)
    }
    return results;
}