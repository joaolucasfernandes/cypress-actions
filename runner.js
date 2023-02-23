const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImUxMWFjMzVhLTEzZmEtNDE2YS05MmYxLTliNzFlNWYyMjAwMC0xNjc3MTkwNTE0OTY0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMzVkNDM5YTUtMTFmYS00MzI2LTk5YWItN2QzMjg4NzQwNTViIiwidHlwZSI6InQifQ.FTDpQQR9T-3rhABdzqEXVeswMo5Ai0rEPbUXH113sjI'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
