// define a function that rolls the dice
export function roll(givenSides, givenDice, roll) {
    
    // keep track  of summed results
    var results = [];
    
    for (let i = 0; i < roll; i++){
        // represents the sum of the results from rolling every dice
        var sumRoll = 0;
        for (let j = 0; j < givenDice; j++){
            // roll the dice
            var rolledNumber = 1 + Math.floor(Math.random() * givenSides);
            // sum the results from rolling every dice
            sumRoll += rolledNumber;
        }
        // add the result to results
        results.push(sumRoll);
    }

    // define the output needed to return from this function
    const rollResult = {
        sides: givenSides,
        dice: givenDice,
        rolls: roll,
        results: results
    }

    return rollResult;
}