
// create readMe template
const generatePage = (proTitle, proDes) => {
    //const { } = TemplateData;
    
    return `
# ${proTitle}

## Description
    ${proDes}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

---

## Installation
- proIns


## Usage
- proUs


## License
- proLic


## Contributing
- proCon}


## Tests
- proTests}


## Questions
>githubName}
>
>GitHub(https://github.com/githubName})
>
>Email me at email}(https://google.com) if you have any additional questions!

    `
}

module.exports = generatePage;