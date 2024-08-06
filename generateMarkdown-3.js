
    function renderLicenseBadge(license) {
      if (license =="MIT") 
       if (license =="ISC") 
        if (license == "WTFPL")
        {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
        return  `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
     }
    
      return "";
    }

  
  
  

  
  
  


  
    

 
function generateMarkdown(data) {
    return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  * [License](#license)
  * [usage](#Usage)
  ## How to Use This Application:
  ${data.installation}
  ## usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
  }

  module.exports=generateMarkdown
  
  


  
  
  



