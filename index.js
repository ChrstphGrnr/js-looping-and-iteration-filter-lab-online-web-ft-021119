// Code your solution in this file

function findMatching(drivers, string) {
  newDrivers = []
    drivers.filter( function (driver) {
    newDrivers.push(driver.toLowerCase() === string.toLowerCase()
  } ) );
  newDrivers
}
