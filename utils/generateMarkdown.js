// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// use github api to grab licenses

function renderLicenseBadge(license) {
  if (license === 'none'){
    return ''
  } else{
  return `![license badge]('https://img.shields.io/badge/license-${license}-green')`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  
  ## Description
  ${data.description}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  [Installation Instructions](## Installation)
  []()
  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions?
  ${data.github}
  ${data.email}



`;
}

module.exports = generateMarkdown;
