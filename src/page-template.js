// TODO: Create a function that returns a license badge based on which license is passed in
      // If there is no license, return an empty string
      function renderLicenseBadge(license) {
        switch(license){
            case "Apache License 2.0":
                return license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            
            case "GNU General Public License v3.0":
                return license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            
            case "MIT License":
                return license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            
            case "BSD 2-Clause 'Simplified' License":
                return license = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
            
            case "BSD 3-Clause 'New' or 'Revised' License":
                return license = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            
            case "Boost Software License 1.0":
                return license = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

            case "Creative Commons Zero v1.0 Universal":
                return license = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";

            case "Eclipse Public License 2.0":
                return license = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";

            case "GNU Affero General Public License v3.0":
                return license = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";

            case "GNU General Public License v2.0":
                return license = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";

            case "GNU Lesser General Public License v2.1":
                return license = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";

            case "Mozilla Public License 2.0":
                return license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

            case "The Unlicense":
                return license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

            case "None":
                return license = "";
        }
      };

// create readMe template
module.exports = templateData => {
    const { proTitle, desWhat, desWhy, proIns, proUs, proLic, proCon, proTests, fullName, githubName, email} = templateData;

    return `
# ${templateData.proTitle}

${renderLicenseBadge(templateData.proLic)}

## Description
    ${templateData.desWhat}
    ${templateData.desWhy}

---

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
> include screenshots here,
> create an 'assets/images' folder and drag image in this section
---


## License
- Licensed under ${templateData.proLic}


## Contributing
- ${templateData.proCon}


## Tests
- ${templateData.proTests}


## Questions
>${templateData.fullName}
>
>[My GitHub Profile](https://github.com/${templateData.githubName})
>
>Email me at ${templateData.email} if you have any additional questions!

    `;
}
