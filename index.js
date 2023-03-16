// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}


const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function returnFirstTwoDrivers(drivers){
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers){
  return drivers.slice(-2);
}


function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

function fareDoubler(fare) {
  const fareMultiplier = createFareMultiplier(2);
  return fareMultiplier(fare);
}

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}
function fareTripler(fare){
  const fareMultiplier = createFareMultiplier(3);
  return fareMultiplier(fare);
}

function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
  return selectingFunction(arrayOfDrivers);
}
