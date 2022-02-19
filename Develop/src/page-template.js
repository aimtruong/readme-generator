
// create readMe template
module.exports = TemplateData => {
    const { proTitle, proDes, proIns, proUs, proLic, proCon, proTests, githubName, email} = TemplateData;
    
    return `
        # ${proTitle}

        ## Description
        ${proDes}


        ## Table of Contents
        [Installation](#installation)
        [Usage](#usage)
        [License](#license)
        [Contributing](#contributing)
        [Tests](#tests)
        [Questions](#questions)


        <a name = "installation"/>
        ## Installation
        ${proIns}


        <a name = "usage"/>
        ## Usage
        ${proUs}


        <a name = "license"/>
        ## License
        ${proLic}


        <a name = "contributing"/>
        ## Contributing
        ${proCon}


        <a name = "tests"/>
        ## Tests
        ${proTests}


        <a name = "questions"/>
        ## Questions
        ${githubName}
        GitHub(https://github.com/${githubName})

        Email me at ${email}() if you have any additional questions!

    `
}