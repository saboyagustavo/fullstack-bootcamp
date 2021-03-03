# Challenge 02 - APIs development

_Module 2 - Back-end with Node.js - FullStack Web Development Bootcamp - IGTI_

## Objectives

Exercise the concepts taught on the back-end module, creating an API and its endpoints using Node.js and Express.

## SOW - Statement of Work

-   [x] Build an API named "grades-control-api" that controls students grades in subjects from a course.

The student must develop endpoints for creating, updating, deleting and consulting grades. The grades must be saved in a JSON file, called “_grades.json_”. This file is previously provided and its endpoints must perform considering the already existing records.
All the following fields are required to a grade record:

-   **id (int)**: unique identifier for the grade. It must be generated automatically by the API, assured that it shall not be repeated.
-   **student (string)**: name of the student. _Example: “Guilherme Assis”_
-   **subject (string)**: name of the subject. _Example: “Math"_
-   **type (string)**: name of the activity. _Example: “Final exam”_
-   **value (float)**: grade of the activity. _Example: 10_
-   **timestamp (string)**: record time. _Example: 2020-05-19T18: 21: 24.964Z_

The _nextId_ property must always store the id that will be used in next, when creating a new grade. The grades property has an array with several grades, each being represented by an object with the fields described previously.

### Activities

The student must develop the following endpoints described below:

1.  -   [x] **An endpoint to create a grade.**

    > -   This endpoint must receive as parameters the student, subject, type and value fields as described above.
    >
    > -   In the timestamp field, the date and time of the insertion time must be saved.
    >
    > -   The endpoint must return the grade object that was created.
    >
    > -   This grade must be saved in the JSON _grades.json_ file, and must have a unique id associated with it.
    > -   The API must assure the automatic increment of this identifier, so that it is not repeated between records.
    > -   Within the _grades.json_ file that was provided for use in the challenge, the _nextId_ field already has a defined value.
    > -   After insertion, it is necessary that _nextId_ be incremented and saved in the file itself, so that it will be properly available for the next insertion.

2.  -   [x] **An endpoint to update a grade.**

    > -   This endpoint must receive as parameters the id of the grade to be changed, the student name, subject, type and value fields.
    > -   This endpoint must validate if the informed grade exists. If it does not, it must throw an error. If it does, the endpoint must update the information received by parameters in the registry, and update it with the new data changed in the _grades.json_ file.

3.  -   [x] **An endpoint to delete a grade.**

    > -   This endpoint must receive the grade id as parameter and delete it from the _grades.json_ file.

4.  -   [x] **An endpoint for query a specific grade.**

    > -   This endpoint must receive a grade id as parameter and return its data.

5.  -   [x] **An endpoint for query the student's total grade in a subject.**

    > -   The endpoint must receive, in the request body, student and the subject, and do the sum of all its corresponding activities grades.
    > -   The endpoint must return the sum of the value property of the records found.

6.  -   [x] **An endpoint to consult the average of the grades from a given subject and type.**

    > -   The endpoint must receive as parameters a subject, a type, and return the average.
    > -   The average is calculated by adding the value of all records, that have the subject and type informed, and dividing by the total number of records that have the same subject and type.

7.  -   [x] **An endpoint to return the top three grades according to the given subject and type.**

    > -   The endpoint must receive, in the request body, a subject and a type, and return an array containing (in ascending order) the three highest values recorded of that subject and type.
