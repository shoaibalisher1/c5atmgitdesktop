#! /usr/bin/env node


import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 9999;

let pinAnswer = await inquirer.prompt(
    [
        {
            name : "pin",
            message : "Enter your Pin",
            type : "number",
        }
    ]
);
if (pinAnswer.pin === myPin) 
    
    {
        console.log("Correct pin code");
        let operationAns = await inquirer.prompt
        (
            [
                {
                    name : "operation",
                    message : "please select option",
                    type: "list",
                    choices: ["cash withdrawal" , "balance inquiry" , "fast cash"]
                }
            ]
        );
        console.log(operationAns);
        if (operationAns.operation === "cash withdrawal") 
            {
                let amountAns = await inquirer.prompt
                (
                    [
                        {
                            name : "amount",
                            message : "enter your amount",
                            type: "number",

                        }
                    ]
                );
                myBalance -= amountAns.amount;
                console.log("your remaining balance is: " + myBalance)
            }
            else if (operationAns.operation === "balance inquiry")
                {
                    console.log("Your balance is: $" + myBalance);
                }
            else if (operationAns.operation === "fast cash")
                (
            [
                {

                    name : "cashOptions",
                    message : "please select option",
                    type: "list",
                    choices: ["5000" , "10000" , "20000"]
                }
            ]
            
                );
                
                


                
      
    }
    else  console.log("incorrect pin number");