//function to return license badge
function renderLicenseBadge(license) {
// If user input is anything but none then return the badge
  if (license !== 'None') {
    return `![${license}](https://img.shields.io/badge/license-${license}-blueviolet)`;
//no license no return
  } else {
    return '';
  };
};

//if function to return license info
function renderLicenseLink(license) {
//if license is none then link for further license info
  if (license !== 'None') {
    return `https://choosealicense.com/licenses/${license}`;
//no license equals an empty string
  } else {
    return '';
  };
};

//function to display license sec of readme with user info
function renderLicenseSection(license) {
//if the user chooses none when license is prompted then return an empty license section
  if (license !== 'None') {
    return `
  ## License
  ${license}: For more information, refer to ${renderLicenseLink(license)}
  `
//if license is not applicable display empty string
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.appTitle}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  * [The link to the live site](${data.liveApp})
  * [The app's gitHub repo](${data.gitRepo})

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  ![ScreenCap of live App](${data.screencap})

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.testing}

  ## Questions

  Please direct any and all inquiries about this application to [email](${data.userEmail}), else check out [my gitHub profile](http://github.com/${data.gitUser}.)
`;
};

module.exports = generateMarkdown;