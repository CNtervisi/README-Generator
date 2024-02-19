const generatedMarkdown = (userInputs) => {
    const generateLicense = (type) => {
      const colors = {
        MPL: "red",
        GPL: "grey",
        Apache: "green",
        MIT: "blue",
        CC: "orange",
        BSD: "goldenrod",
      };
  
      const color = colors[type] || "lightgrey";
      return `![License](https://img.shields.io/badge/license-${type}-${color})`;
    };
  
    const {
      title,
      description,
      installation,
      usage,
      contributing,
      tests,
      license,
      github,
      email,
    } = userInputs;
  
    const readMeContent = `
      
  # ${title}
  
  ${generateLicense(license)}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description 
  
  ${description}
  
  ## Installation 
  
  ${installation}
  
  ## Usage 
  
  ${usage}
  
  ## Contributing 
  
  ${contributing}
  
  ## Tests 
  
  ${tests}  
  
  ## License
  
  ${license}
  
  ## Questions?
  
  ### Github: [${github}](https://github.com/${github})
  
  ### Reach Me Via Email: ${email}
  `;
  
    return readMeContent;
  };
  
  export default generatedMarkdown;
  