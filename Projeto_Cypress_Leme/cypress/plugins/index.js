const { Before } = require('cypress-cucumber-preprocessor/steps/index');

const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  const options = {
    ...cucumber.defaultOptions,
    // Update the line below with the correct path to your step definitions
    stepDefinitions: 'cypress/e2e/**/cenarios/*.js',
  };

  on('file:preprocessor', cucumber(options));



  // plugins code goes here

  return config;
};
