// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = [ "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"];

function renderLicenseBadge(license) {
  if (license===licenseArr[0]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenseArr[1]){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license===licenseArr[2]){
    return "[![License: OSL-3.0](https://img.shields.io/badge/License-OSL--3.0-lightgrey.svg)](https://opensource.org/licenses/OSL-3.0)"
  } else if (license===licenseArr[3]){
    return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
  } else if (license===licenseArr[4]){
    return "[![License: NCSA](https://img.shields.io/badge/License-NCSA-lightgrey.svg)](https://opensource.org/licenses/NCSA)"
  } else if (license===licenseArr[5]){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else if (license===licenseArr[6]){
    return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
  } else {
    return ""
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license===licenseArr[2]){
    return `[${licenseArr[2]}](https://opensource.org/licenses/OSL-3.0)`
  } else if (license===licenseArr[3]){
    return `[${licenseArr[3]}](https://opensource.org/licenses/OFL-1.1)`
  } else if (license===licenseArr[4]){
    return `[${licenseArr[4]}](https://opensource.org/licenses/NCSA)`
  } else if (license===licenseArr[5]){
    return `[${licenseArr[5]}](http://unlicense.org/)`
  } else if (license===licenseArr[6]){
    return `[${licenseArr[6]}](https://opensource.org/licenses/Zlib)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArr[0]){
    return `Read more about ${licenseArr[0]} here:`
  } else if (license===licenseArr[1]){
    return `Read more about ${licenseArr[1]} here:`
  } else if (license===licenseArr[2]){
    return `Read more about ${licenseArr[2]} here:`
  } else if (license===licenseArr[3]){
    return `Read more about ${licenseArr[3]} here:`
  } else if (license===licenseArr[4]){
    return `Read more about ${licenseArr[4]} here:`
  } else if (license===licenseArr[5]){
    return `Read more about ${licenseArr[5]} here:`
  } else if (license===licenseArr[6]){
    return `Read more about ${licenseArr[6]} here:`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.license)}\n
  
  # ${data.title}
  
  ## Table-of-Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ---

  ## [Description](#table-of-contents)
  ${data.description}\n
  ---

  ## [License](#table-of-contents)
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}\n
  ---

  ## [Installation](#table-of-contents)
  Steps required to install project and how to get the development environment running:
  ${data.installation}\n
  ---

  ## [Usage](#table-of-contents)
  ${data.usage}\n
  ---

  ## [Contributing](#table-of-contents)
  The following users contributed to this project:\n
  ${data.contribute}\n
  ---

  ## [Tests](#table-of-contents)
  ${data.test}\n
  ---

  ## [Questions](#table-of-contents)
  For any questions, please contact me with the information below:\n
  Github: [${data.username}](https://github.com/${data.username})\n
  Email: <a href="mailto:${data.email}">${data.email}</a>
`;
}

module.exports = generateMarkdown;