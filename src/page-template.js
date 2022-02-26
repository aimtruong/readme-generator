
// create readMe template
module.exports = templateData => {
    const { proTitle, proDes, proIns, proUs, proLic, proCon, proTests, githubName, email/*,...license*/} = templateData;

    return `
# ${templateData.proTitle}

//{license}

## Description
    ${templateData.proDes}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

---

## Installation
- ${templateData.proIns}


## Usage
- ${templateData.proUs}


## License
- ${templateData.proLic}


## Contributing
- ${templateData.proCon}


## Tests
- ${templateData.proTests}


## Questions
>${templateData.githubName}
>
>[GitHub](https://github.com/${templateData.githubName})
>
>Email me at ${templateData.email} if you have any additional questions!

    `;
}
