// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Your Project Title


## Description 


${data.description}


## Table of Contents 


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation


${data.installation}


## Usage


${data.usage}


## Credits


${data.author}


## License


${data.license}


## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing

${data.contributions}

## Tests

${data.tests}


---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

`;
}

module.exports = generateMarkdown;
