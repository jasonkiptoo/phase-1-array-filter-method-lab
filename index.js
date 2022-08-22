// Code your solution here
function findMatching(driversList,driver){

const foundDrivers = driversList.filter(drivers => drivers.toUpperCase() === driver.toUpperCase());

  return foundDrivers

}
///function to return drivers names when provided letters match

function fuzzyMatch(driversNames, findDriver){
    // const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

let drivers=driversNames.filter(drivers=> drivers.startsWith(findDriver))

    return drivers
}


function matchName(driversNames, findDriver){

    const matchingDriver = driversNames.filter(driversNames => {
        return driversNames.name === findDriver;
    })
    return matchingDriver;
}



