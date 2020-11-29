const start = () => {
    // console.log(mappedPeople()); //-> (100) [{…}, {…}, {…}, {…}, {…}, {…}, ...]
    console.log(filteredPeople()); //-> (22)  [{…}, {…}, {…}, {…}, {…}, {…}, ...]
};

const mappedPeople = () =>
    people.results.map((person) => {
        return { name: person.name, email: person.email };
    });

const filteredPeople = () =>
    people.results.filter((person) => {
        return person.dob.age >= 65;
    });

start();
