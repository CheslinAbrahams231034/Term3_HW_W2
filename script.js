function calculateAverage(oxygenReadings) {
    // Summing up all the oxygen readings
    let sum = oxygenReadings.reduce((total, currentValue) => total + currentValue, 0);

    // Calculating the average
    let average = sum / oxygenReadings.length;

    // Checking if the average is within the safe range
    if (average >= 18.5 && average <= 23.5) {
        return `The average oxygen level is ${average.toFixed(2)}%. Oxygen level is safe.`;
    } else {
        return `The average oxygen level is ${average.toFixed(2)}%. Oxygen level is NOT safe.`;
    }
}

let oxygenReadings = [19.45781169874675,
    23.870565988206803,
    20.52379212069659,
    20.730682668963794,
    18.659291043109494,
    19.77949047739719,
    22.821768480045765,
    24.741832651909537,
    20.035275235795584,
    25.49609064990466,
    19.126526150833204,
    23.0941330302319,
    19.564065658707438,
    24.702737494658574,
    20.30713036623542,
    24.061934598159038,
    25.379470416235655,
    25.43921433902142,
    23.763483471099907,
    18.673823130928167,
    25.119446249423955,
    21.63158615424079,
    18.884928680315028,
    18.87350165046249,
    20.231699011804196,
    21.817802475457096,
    25.42664945154559,
    21.768639656571292,
    23.227217527782404,
    21.276934896621103,
    20.046920437252133,
    19.00680326412115,
    24.657150409099142,
    22.14671383841292,
    24.727045705870488,
    19.36010533551836,
    22.353731767130586,
    23.455040219481518,
    23.39545328150891,
    23.069897739134817,
    19.055932309715086,
    21.030862079284493,
    21.77364259234597,
    25.304978669578627,
    23.420510280185947,
    24.02921734673976,
    23.209610220854817,
    21.159259853546136,
    24.523364177609967,
    20.786235047498327]
   ;
console.log(calculateAverage(oxygenReadings));

//Finding the sum of the Readings
let sum = oxygenReadings.reduce((total, currentValue) => total + currentValue, 0);
console.log(`The sum of all the calibration values is ${sum}`);