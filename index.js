function findMatching(drivers, name){
  let da = drivers.filter(
    (match) => match.toLowerCase() === name.toLowerCase()
  )
  return da
}

function fuzzyMatch(drivers, name) {
  const driversArr = drivers.filter(
      (match) => match.toLowerCase().indexOf(name.toLowerCase()) === 0
  )
  return driversArr;
}

function matchName(driver, name) {
  const driverArr = driver.filter(
      (match) => match.name === name
  )
  return driverArr;}
