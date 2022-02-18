
// create readMe template
module.exports = templateData => {
    const { proTitle, }
    
    return `
        # ${proTitle}

        ## Description
        ${proDes}

        ## Table of Contents
        [Installation]()
        [Usage]()
        [License]()
        [Contributing]()
        [Tests]()
        [Questions]()

        ## Installation


        ## Usage


        ## License


        ## Contributing


        ## Tests


        ## Questions
        ${githubName}


    `
}