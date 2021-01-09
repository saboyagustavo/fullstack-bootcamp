# Challenge 01 - Web Development Fundamentals

_The student must create an application that fetch data from an API and manipulate it through data structures._

## Main goals

-   Declare semantic HTML.
-   Style with CSS.
-   Map DOM elements to be manipulated with JavaScript.
-   Format values with JavaScript.
-   Do arithmetics with array methods as map, filter and reduce.
-   Do HTTP requests by using fetch command.

## SOW - Statement of work

Create an application that filter users and display statistics by a defined filter.

### Activities

1.  -   [x] At the initial load of the application, obtain the data from [this API](https://randomuser.me/api/?Seed=javascript&results=100&nat=BR&noinfo).
2.  -   [x] Load user data into an array.
3.  -   [x] Allow users filtering through an input.
4.  -   [x] The user can filter data when typing at least one character on the input.
5.  -   [] The user will be able to filter the data either by typing "Enter" or clicking the corresponding button.
6.  -   [] The layout of the page must have two panels.
7.  -   [] In the left panel, list the filtered users.
8.  -   [] In the right panel, calculate and show some statistics about these users.

## Rules and Tips

-   After executing the request to the API, obtain only the basic data for the app. These are: name (first + last), picture, dob.age and gender.
-   Watch the input with 'keyup' event.
-   Filter the data from any position in the name, e.g., the name "Brenda" (if it exists in the API) must be returned if the filter is "enda".
-   To filter, consider all text in lowercase. Thus, the "E" filter will bring both "Elena" and "Helena", if these usernames exists in the API.
-   Accents and special characters must be considered. Do not “clean” the text. Therefore, the text "Andre" cannot filter out the name "André".

#### Results
