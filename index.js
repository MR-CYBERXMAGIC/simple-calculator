#! /usr/bin/env node
import inquirer from "inquirer"; //inquirer: Used to create interactive prompts in the command line.
import chalk from "chalk"; //chalk: Used to add color and formatting to text displayed in the console.
import chalkAnimation from "chalk-animation"; //chalk-animation: Used to create fancy text animations.
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function welcome() {
    //The welcome function is an async function, meaning it can handle asynchronous operations (like waiting).
    let title = chalkAnimation.karaoke("Initializing"); //It uses chalkAnimation to display animated message
    await sleep(); //delay created by sleep,
    title.stop(); //stop animation
    console.log(chalk.gray(`
     _____________________
    |  _________________  |
    | |   Calculator    | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |                                    
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `)); //displays a colorful calculator ASCII art.(source:https://www.asciiart.eu/electronics/calculators)
    let title2 = chalkAnimation.rainbow("Your caluculator is ready \n Now you can use it\n");
    await sleep();
    title2.stop();
}
await welcome();
async function questions() {
    const answers = await inquirer.prompt(
    //It uses inquirer.prompt to display a series of prompts and collects user input.
    [
        /* Pass your questions in here */
        {
            type: "number",
            name: "num1",
            message: chalk.cyan("Enter first number: "),
        },
        {
            type: "list",
            name: "operator",
            message: "Select an operation you want to perform \n",
            choices: [
                "Addition(+)",
                "Subtraction(-)",
                "Multiplication(*)",
                "Division(/)",
            ],
        },
        {
            type: "number",
            name: "num2",
            message: chalk.cyan("Enter Second number: "),
        },
    ]);
    if (answers.operator == "Addition(+)") {
        //Actual funtionality of calculator
        console.log(`\n\n\t${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}\n\n`);
    }
    else if (answers.operator == "Subtraction(-)") {
        console.log(`\n\n\t${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}\n\n`);
    }
    else if (answers.operator == "Multiplication(*)") {
        console.log(`\n\n\t${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}\n\n`);
    }
    else if (answers.operator == "Division(/)") {
        console.log(`\n\n\t${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}\n\n`);
    }
}
async function againCalculate() {
    do //The againCalculate function uses a loop to keep asking the user if they want to perform another calculation.
     {
        //do-while loop is used so that it must perform operation once
        await questions();
        var again = await inquirer.prompt({
            type: "input",
            name: "request",
            message: chalk.cyan("Do you want to calculate again \n y for contiune \n n for discontinue \n"),
        });
    } while (again.request == "y" || again.request == "Y");
}
againCalculate();
