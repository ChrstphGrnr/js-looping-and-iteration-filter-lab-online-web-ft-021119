// Code your solution in this file

function findMatching(drivers, string) {
  let newDrivers = drivers.filter( function (driver) {
    return driver.toLowerCase() === string.toLowerCase();
  } );
  newDrivers
}
