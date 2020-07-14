import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
function check(array){
array.forEach(function(e){
    if((e)["RoundID"] == 255959){
        console.log((e)["Home Team Name"]);
        console.log((e)["Away Team Name"]);
        console.log((e)["Home Team Goals"]);
        console.log((e)["Away Team Goals"]);
        console.log((e)["Win conditions"]);
    }
});
}
check(fifaData);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects 
with only finals data */

function getFinals(data) {
let finalsData = [];
    data.forEach(function(e){
        if((e)["Stage"] == "Final"){
            finalsData.push(e);
        }
    });
return(finalsData);
};
console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, 
and returns an array called `years` containing all of the years in the dataset */

// function getYears(data, cb){
//     let years = [];
//     let cbArray = cb(data);
//     let i;
//     for(i = 0; i < cbArray.length; i++){
//         years.push(cbArray[i]["Year"]);
//     }
//     console.log(years);
// }
// getYears(fifaData, getFinals);

function getYearsMap(data, cb) {
    let cbArray = cb(data);
    let years = cbArray.map((matches) => {
      return matches.Year;
    });
    return years;
}
console.log(getYearsMap(fifaData, getFinals));

// function getYears(callback) {
//    let yearsData = [];
//    yearsData.push(callback.year);
//     console.log(yearsData);
// }

// getYears(getFinals);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, cb) {
    let winners = [];
    let cbArray = cb(data);
    cbArray.forEach(function(e){
        if(e["Home Team Goals"] > e["Away Team Goals"]){
            winners.push(e["Home Team Name"]);
        }else{
            winners.push(e["Away Team Name"]);
        }
    });
    return winners;
}

console.log(getWinners(fifaData, getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters 
and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, cb1, cb2) {
let winner = cb1(data, getFinals);
let year = cb2(data, getFinals);
let totalArray = [];

    for(let i = 0; i < winner.length; i++){
        totalArray.push(`In ${year[i]}, ${winner[i]} won the world cup!`);
    }
    return totalArray;
};
console.log(getWinnersByYear(fifaData, getWinners, getYearsMap));

// console.log(getWinnersByYear(fifaData, getYears, getWinners));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the 
average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    // let home = [];
    // for(let i = 0; i < data.length; i++){
    //     home.push(data[i]["Home Team Goals"]);
    // }
    // let total = 0;
    // for(let i = 0; i < home.length; i++){
    //     total += home[i];
    // }
    // let avg = total / home.length;
    // return avg;

    let totalHome = 0;
    for(let i = 0; i < data.length; i++){
        totalHome += data[i]["Home Team Goals"];
    }
    let avgHome = totalHome / data.length;
    console.log(`Home has an average of ${avgHome} per match.`);

    let totalAway = 0;
    for(let i = 0; i < data.length; i++){
        totalAway += data[i]["Away Team Goals"];
    }
    let avgAway = totalAway / data.length;
    console.log(`Away has an average of ${avgAway} per match.`);
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
