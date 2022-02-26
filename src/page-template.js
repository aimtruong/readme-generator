
// create readMe template
module.exports = templateData => {
    const { proTitle, desWhat, desWhy, proIns, proUs, proLic, proCon, proTests, fullName, githubName, email/*,...license*/} = templateData;

    return `
# ${templateData.proTitle}

//{license}

## Description
    ${templateData.desWhat}
    ${templateData.desWhy}


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
---
> include screenshots here
> create an 'assets/images' folder and drag image in this section
---


## License
- ${templateData.proLic}


## Contributing
- ${templateData.proCon}


## Tests
- ${templateData.proTests}


## Questions
>${templateData.fullName}
>
>[GitHub](https://github.com/${templateData.githubName})
>
>Email me at ${templateData.email} if you have any additional questions!

    `;
}
