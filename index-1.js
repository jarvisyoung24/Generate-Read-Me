const fs = require("fs");
const inquirer=require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");


 const questions = [
    

    {
        type:"input",
        name:"usage",
        message:"what is the usage",
    },
    {
        type:"input",
        name:"description",
        message:"please  describe your project",
    },
    {
        type:"input",
        name:"installation",
        message:"please give installation instructions",
    },
    {
        type:"input",
        name:"contributors",
        message:"please name your contributers",
    },
    {
        type:"input",
        name:"test",
        message:"please enter test instructions",
    },

    {
        type:"input",
        name:"github username",
        message:"please enter Github userName",
    },
    {
        type:"input",
        name:"Email",
        message:"please enter email",
    },
    {
        type:"list",
        name:"license",
        message:"please choose a licenses",
        choices: ["MIT","Isc","WTFPL", "none"],
    },

];
    


function writeToFile(fileName, data) {

  
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  
  function init() {
     inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}


  init();

  

  



  


  

  
  
  
 



  
  
 


  
  
  
  



  