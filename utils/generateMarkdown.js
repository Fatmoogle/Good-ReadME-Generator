// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
## Description 

${data.description}


## Table of Contents 


* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Questions](*Questions)


## Installation

${data.installation}


## Usage

${data.usage}


## Credits

${data.author}


## License

${data.license}


## Contributing

${data.contributions}


## Tests

${data.tests}


## Questions

${data.questions}


---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

`;
}

module.exports = generateMarkdown;
