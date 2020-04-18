function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

// Development will happen in generate markdown
function generateMarkdown(data, data1) {
   return `# Title: ${data.title}
   
# Description: 
   ${data.description}

# Table of Contents:

  - Installation Instructions - Anything you need to install to make ${data.title} work

  - Usage Info - Lets you know how to use ${data.title}

  - Contributing Guidelines - How you can help improve ${data.title}

  - Testing Info - Any built in testing for ${data.title}

  - Licensing Info - Keeping ${data.title} as legal as possible
  
  - Questions or Concerns - Pass on your feedback for ${data.title}


# Installation Instructions: 
  ${data.installation}

# Usage Info: 
  ${data.usage}

# Contributing Guidelines: 
  ${data.contributing}

# Testing Info: 
  ${data.tests}

# Licensing Info: 
  ${renderLicenseBadge(data.license, data.github, data.title)}
  ${renderLicenseSection(data.license)}

# Questions or Concerns: 
  If you have any questions feel free to find me on GitHub
${data1.data.avatar_url} My email address is: ${data1.data.email}`;


}

module.exports = generateMarkdown;
