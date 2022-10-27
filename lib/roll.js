export function roll(givenSides, givenDice, roll) {
    // keep track  of summed results
    var results = [];
    for (let i = 0; i < roll; i++){
        var singleVal = 0
        for (let j = 0; j < givenDice; j++){
            // roll the dice
            var rolledNumber = 1 + Math.floor(Math.random() * givenSides);
            // sum the results from rolling every dice
            singleVal += rolledNumber
        }
        // add the result to results
        results.push(singleVal)
    }
    
    // define the output needed to return from this function
    const output = {
        sides: givenSides,
        dice: givenDice,
        rolls: roll,
        results: results
    }

    return output;
}