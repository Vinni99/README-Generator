// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {

 const badge = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'APACHE 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'GPL 3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
     
 }   
  return badge[license] 

}

 function renderLicenseLink(license) {
  const link = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'APACHE 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
  }
  return link[license]
}


// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

 ${renderLicenseBadge(data['license'])}

  ## Description
  This is a test readme to demo the homework

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:

  ${data.installation}

  ## Usage
  It is a repo to demo the homework

  ## License
  This project is licensed under the MIT license.

  ${renderLicenseLink(data['license'])}

  ## Contributing
  contact me

  ## Tests
  To run tests, run the following command:

  ${data.tests}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}
`;
}



module.exports = generateMarkdown;
