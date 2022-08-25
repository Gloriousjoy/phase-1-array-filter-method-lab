// Code your solution here
const drivers = []

function findMatching(drivers, string){
    return drivers.filter (
        (matchingName) => matchingName.toLowerCase() === string.toLowerCase()
    );
}

function fuzzyMatch(drivers, string){
    return drivers.filter (
        (matchingName) => matchingName.toLowerCase().indexOf(string.toLowerCase()) === 0
    );
}

function matchName(drivers, string){
    return drivers.filter((data => data.name === string));

}