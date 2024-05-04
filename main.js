#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
console.log(chalk.blueBright("\n \t welcome \n "));
while (true) {
    const answers = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.greenBright("Enter your todo:")
        },
        {
            name: "addmore",
            type: "confirm",
            message: chalk.greenBright("Do you want to add more todo?"),
            default: "false"
        }
    ]);
    todos.push(answers.todo);
    todos.forEach((todo) => {
        console.log(chalk.blackBright(todo));
    });
    if (answers.todo == false) {
        break;
    }
}
