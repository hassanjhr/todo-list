#! /usr/bin/env node
// todo app in typscript by Muhammad Hassan Jawaid
import inquirer from "inquirer";
// user variable:
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "todoItem",
            type: "input",
            message: "add todo item in listing"
        },
        {
            name: "addMore",
            type: "list",
            choices: ["yes", "no"]
        }
    ]);
    // output of program:
    const { todoItem, addMore } = input;
    todos.push(todoItem);
    if (addMore == "no") {
        console.log("todoList:");
        // add more items:
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        break;
    }
}
