function produceDrivingRange(blockRange) {
  return function(start, end) {
    const trip = parseInt(end.split('th')[0]) - parseInt(start.split('th')[0]);
    
    if (trip > blockRange) {
      return `${trip - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - trip}`
    }
  }
}

function produceTipCalculator(percentage) {
  return (bill) => bill * percentage;
}