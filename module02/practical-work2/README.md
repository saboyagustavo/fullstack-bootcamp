# Practical Work 2 - Working with Node modules

_The student must create a Node.js project to implement methods which process JSON files._

## Main goals

-   Implement a Node.js project
-   Asynchronous processing mutiple files
-   Working with JSON

## SOW - Statement of work

The file Estados.json is a list within all federative units (UF) of Brazil; each one represented by an ID. In the file Cidades.json there is an almost complete list of cities of Brazil with their respective state represented by its ID, reffering to Estados.json.

### Activities

1.  -   [x] download estados.json and cidades.json from [this link](https://github.com/felipefdl/cidades-estados-brasil-json);

2.  -   [x] Create a function that writes an "UF.json" for each state.
3.  -   [x] Create a function that pass the "UF" as argument and reads the corresponding UF.json, returning the amount of cities from that state.
4.  -   [x] Implement a method that prints an array containing the UF of five states with more cities, followed by their city amount in decrescent order. For example: [“UF-93”, “UF-82”, “UF-74”, “UF-72”, “UF-65”]
5.  -   [x] Implement a method that prints an array containing the UF of five states with less cities, followed by their city amount in crescent order. For example: [“UF-93”, “UF-82”, “UF-74”, “UF-72”, “UF-65”]
6.  -   [x] Implement a method that prints an array containing the cities of longest name from every state, followed by their respective UF. Example: ["City's Name – UF”, “City's Name" – UF”, ...].
7.  -   [x] Implement a method that prints an array containing the cities of shortest name from every state, followed by their respective UF. Example: ["City's Name – UF”, “City's Name" – UF”, ...].
8.  -   [x] Implement a method that prints a string with the longest city name among all states, followed by its respective UF. Example: “Nome da Cidade - UF".
9.  -   [x] Implement a method that prints a string with the shortest city name among all states, followed by its respective UF. Example: “Nome da Cidade - UF".

## Rules

-   Do not amend the name of cities in the original object.
-   In case of a tie between cities name's length the use of alphabetical order should prevail.
-   When the project runs, it should execute its methods in sequence and end the process.
